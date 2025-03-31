
import { useState, useEffect } from "react";
import MainLayout from "@/layouts/MainLayout";
import LoginPanel from "@/components/admin/LoginPanel";
import AdminDashboard from "@/components/admin/AdminDashboard";

const AdminPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem("admin_authenticated");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <MainLayout>
      <div className="container py-12">
        {!isAuthenticated ? (
          <LoginPanel onAdminAuth={() => setIsAuthenticated(true)} />
        ) : (
          <AdminDashboard />
        )}
      </div>
    </MainLayout>
  );
};

export default AdminPage;
