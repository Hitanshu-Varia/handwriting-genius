
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UserAuth from "./UserAuth";
import AdminAuth from "./AdminAuth";

interface LoginPanelProps {
  onAdminAuth: () => void;
}

const LoginPanel = ({ onAdminAuth }: LoginPanelProps) => {
  return (
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
              <AdminAuth onAuth={onAdminAuth} />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPanel;
