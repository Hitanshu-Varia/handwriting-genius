
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Pencil, Trash2, ShieldAlert, Download, FileUp, LogIn, Facebook, LucideGoogle } from "lucide-react";
import { toast } from "@/lib/toast";
import MainLayout from "@/layouts/MainLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

// Mock storage for files (would be replaced with actual backend storage in production)
type NotebookFile = {
  id: string;
  name: string;
  type: "dataset" | "training";
  description: string;
  uploadDate: string;
  fileUrl: string; // In a real app, this would be a URL to the stored file
}

// Initial sample data
const initialFiles: NotebookFile[] = [
  {
    id: "1",
    name: "Dataset Creation Notebook",
    type: "dataset",
    description: "Notebook for processing handwriting samples and creating a dataset",
    uploadDate: new Date().toISOString(),
    fileUrl: "/sample_notebooks/dataset_creation.ipynb"
  },
  {
    id: "2",
    name: "Model Training Notebook",
    type: "training",
    description: "Notebook for training the handwriting model with the prepared dataset",
    uploadDate: new Date().toISOString(),
    fileUrl: "/sample_notebooks/model_training.ipynb"
  }
];

// User login component
const UserAuth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      setError(true);
      toast.error("Please fill in all fields");
      return;
    }
    
    // Mock user login - in a real app, this would authenticate with a backend
    localStorage.setItem("user_authenticated", "true");
    toast.success("Login successful!");
    window.location.href = "/";
  };

  const handleSocialLogin = (provider: string) => {
    // Mock social login - in a real app, this would redirect to the provider's auth page
    toast.success(`Logging in with ${provider}...`);
    setTimeout(() => {
      localStorage.setItem("user_authenticated", "true");
      window.location.href = "/";
    }, 1000);
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input 
          id="email" 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="user-password">Password</Label>
        <Input 
          id="user-password" 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
      </div>
      {error && (
        <Alert variant="destructive">
          <AlertTitle>Login Failed</AlertTitle>
          <AlertDescription>
            Please check your credentials and try again.
          </AlertDescription>
        </Alert>
      )}
      <Button onClick={handleLogin} className="w-full">
        <LogIn className="mr-2 h-4 w-4" />
        Login
      </Button>
      
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <Separator className="w-full" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <Button onClick={() => handleSocialLogin("Google")} variant="outline" className="w-full">
          <LucideGoogle className="mr-2 h-4 w-4" />
          Google
        </Button>
        <Button onClick={() => handleSocialLogin("Facebook")} variant="outline" className="w-full">
          <Facebook className="mr-2 h-4 w-4" />
          Facebook
        </Button>
      </div>
    </div>
  );
};

// Admin auth component
const AdminAuth = ({ onAuth }: { onAuth: () => void }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleAuth = () => {
    // Very basic authentication - in a real app, use a proper auth system
    if (password === "admin123") {
      localStorage.setItem("admin_authenticated", "true");
      onAuth();
      toast.success("Admin authentication successful");
    } else {
      setError(true);
      toast.error("Invalid admin password");
    }
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="admin-password">Admin Password</Label>
        <Input 
          id="admin-password" 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter admin password"
        />
      </div>
      {error && (
        <Alert variant="destructive">
          <AlertTitle>Authentication Failed</AlertTitle>
          <AlertDescription>
            The password you entered is incorrect.
          </AlertDescription>
        </Alert>
      )}
      <Button onClick={handleAuth} className="w-full">
        <ShieldAlert className="mr-2 h-4 w-4" />
        Login to Admin Panel
      </Button>
    </div>
  );
};

// File upload component
const FileUploadForm = ({ 
  onFileUploaded 
}: { 
  onFileUploaded: (file: NotebookFile) => void 
}) => {
  const [fileName, setFileName] = useState("");
  const [fileType, setFileType] = useState<"dataset" | "training">("dataset");
  const [fileDescription, setFileDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
      // Use the file name if no custom name has been entered
      if (!fileName) {
        setFileName(e.target.files[0].name);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedFile) {
      toast.error("Please select a file to upload");
      return;
    }

    if (!fileName) {
      toast.error("Please provide a name for the file");
      return;
    }

    // In a real app, you would upload the file to a server here
    // For now, we'll just create a mock file URL
    const newFile: NotebookFile = {
      id: Date.now().toString(),
      name: fileName,
      type: fileType,
      description: fileDescription,
      uploadDate: new Date().toISOString(),
      fileUrl: URL.createObjectURL(selectedFile) // This creates a temporary local URL
    };

    onFileUploaded(newFile);
    
    // Reset form
    setFileName("");
    setFileType("dataset");
    setFileDescription("");
    setSelectedFile(null);
    
    toast.success("File uploaded successfully");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="file-upload">Notebook File (.ipynb)</Label>
        <Input 
          id="file-upload" 
          type="file" 
          accept=".ipynb"
          onChange={handleFileChange}
          className="cursor-pointer"
        />
        {selectedFile && (
          <p className="text-sm text-gray-500">
            Selected: {selectedFile.name} ({Math.round(selectedFile.size / 1024)} KB)
          </p>
        )}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="file-name">Display Name</Label>
        <Input 
          id="file-name" 
          value={fileName} 
          onChange={(e) => setFileName(e.target.value)}
          placeholder="Enter a name for this notebook"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="file-type">Notebook Type</Label>
        <select 
          id="file-type" 
          value={fileType}
          onChange={(e) => setFileType(e.target.value as "dataset" | "training")}
          className="w-full h-10 rounded-md border border-input bg-background px-3 py-2"
        >
          <option value="dataset">Dataset Creation</option>
          <option value="training">Model Training</option>
        </select>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="file-description">Description</Label>
        <Input 
          id="file-description" 
          value={fileDescription} 
          onChange={(e) => setFileDescription(e.target.value)}
          placeholder="Enter a description for this notebook"
        />
      </div>
      
      <Button type="submit" className="w-full">
        <FileUp className="mr-2 h-4 w-4" />
        Upload Notebook
      </Button>
    </form>
  );
};

// File edit component
const FileEditForm = ({ 
  file, 
  onFileUpdated 
}: { 
  file: NotebookFile, 
  onFileUpdated: (updatedFile: NotebookFile) => void 
}) => {
  const [fileName, setFileName] = useState(file.name);
  const [fileType, setFileType] = useState<"dataset" | "training">(file.type);
  const [fileDescription, setFileDescription] = useState(file.description);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!fileName) {
      toast.error("Please provide a name for the file");
      return;
    }

    const updatedFile: NotebookFile = {
      ...file,
      name: fileName,
      type: fileType,
      description: fileDescription,
    };

    onFileUpdated(updatedFile);
    toast.success("File updated successfully");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="edit-file-name">Display Name</Label>
        <Input 
          id="edit-file-name" 
          value={fileName} 
          onChange={(e) => setFileName(e.target.value)}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="edit-file-type">Notebook Type</Label>
        <select 
          id="edit-file-type" 
          value={fileType}
          onChange={(e) => setFileType(e.target.value as "dataset" | "training")}
          className="w-full h-10 rounded-md border border-input bg-background px-3 py-2"
        >
          <option value="dataset">Dataset Creation</option>
          <option value="training">Model Training</option>
        </select>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="edit-file-description">Description</Label>
        <Input 
          id="edit-file-description" 
          value={fileDescription} 
          onChange={(e) => setFileDescription(e.target.value)}
        />
      </div>
      
      <Button type="submit" className="w-full">
        Save Changes
      </Button>
    </form>
  );
};

const AdminPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [files, setFiles] = useState<NotebookFile[]>(initialFiles);
  const [editingFile, setEditingFile] = useState<NotebookFile | null>(null);

  // Check if admin is already authenticated
  useEffect(() => {
    const authStatus = localStorage.getItem("admin_authenticated");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleFileUploaded = (newFile: NotebookFile) => {
    setFiles(prev => [...prev, newFile]);
  };

  const handleFileUpdated = (updatedFile: NotebookFile) => {
    setFiles(prev => prev.map(file => 
      file.id === updatedFile.id ? updatedFile : file
    ));
    setEditingFile(null);
  };

  const handleFileDeleted = (fileId: string) => {
    setFiles(prev => prev.filter(file => file.id !== fileId));
    toast.success("File deleted successfully");
  };

  const downloadFile = (fileUrl: string, fileName: string) => {
    // In a real app, this would initiate a download of the actual file
    toast.info(`Downloading ${fileName}...`);
    
    // If we have actual files to download:
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isAuthenticated) {
    return (
      <MainLayout>
        <div className="container py-12">
          <div className="mx-auto max-w-md space-y-6">
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="text-center">Welcome to HandwritingGenius</CardTitle>
                <CardDescription className="text-center">
                  Login to your account or access the admin panel
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="user" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="user">User Login</TabsTrigger>
                    <TabsTrigger value="admin">Admin Access</TabsTrigger>
                  </TabsList>
                  <TabsContent value="user" className="mt-4">
                    <UserAuth />
                  </TabsContent>
                  <TabsContent value="admin" className="mt-4">
                    <AdminAuth onAuth={() => setIsAuthenticated(true)} />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container py-12">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Admin Panel</h1>
            <p className="text-gray-500">
              Manage the Colab notebook files that users can download for handwriting model training.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
            <Card>
              <CardHeader>
                <CardTitle>Upload New Notebook</CardTitle>
              </CardHeader>
              <CardContent>
                <FileUploadForm onFileUploaded={handleFileUploaded} />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Manage Notebooks</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Upload Date</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {files.map((file) => (
                      <TableRow key={file.id}>
                        <TableCell className="font-medium">{file.name}</TableCell>
                        <TableCell>
                          {file.type === "dataset" ? "Dataset Creation" : "Model Training"}
                        </TableCell>
                        <TableCell>
                          {new Date(file.uploadDate).toLocaleDateString()}
                        </TableCell>
                        <TableCell className="text-right space-x-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => downloadFile(file.fileUrl, file.name)}
                          >
                            <Download className="h-4 w-4" />
                          </Button>
                          
                          <Sheet>
                            <SheetTrigger asChild>
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => setEditingFile(file)}
                              >
                                <Pencil className="h-4 w-4" />
                              </Button>
                            </SheetTrigger>
                            <SheetContent>
                              <SheetHeader>
                                <SheetTitle>Edit Notebook</SheetTitle>
                                <SheetDescription>
                                  Update the information for this notebook file.
                                </SheetDescription>
                              </SheetHeader>
                              {editingFile && (
                                <div className="py-4">
                                  <FileEditForm 
                                    file={editingFile} 
                                    onFileUpdated={handleFileUpdated} 
                                  />
                                </div>
                              )}
                            </SheetContent>
                          </Sheet>
                          
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => {
                              if (confirm(`Are you sure you want to delete "${file.name}"?`)) {
                                handleFileDeleted(file.id);
                              }
                            }}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                    {files.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={4} className="text-center py-8 text-gray-500">
                          No notebook files have been uploaded yet.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AdminPage;
