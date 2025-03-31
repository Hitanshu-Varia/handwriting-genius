
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { LogIn, Github, Facebook } from "lucide-react";
import { toast } from "@/lib/toast";

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
    
    localStorage.setItem("user_authenticated", "true");
    toast.success("Login successful!");
    window.location.href = "/";
  };

  const handleSocialLogin = (provider: string) => {
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
          <Github className="mr-2 h-4 w-4" />
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

export default UserAuth;
