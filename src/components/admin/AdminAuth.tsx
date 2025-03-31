
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ShieldAlert } from "lucide-react";
import { toast } from "@/lib/toast";

interface AdminAuthProps {
  onAuth: () => void;
}

const AdminAuth = ({ onAuth }: AdminAuthProps) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleAuth = () => {
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

export default AdminAuth;
