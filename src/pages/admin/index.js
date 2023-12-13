import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const { default: AdminScreen } = require("@/components/pages/admin/admin");

const AdminPanel = () => {
  const router = useRouter();
  const session = useSession();

  useEffect(() => {
    if (session.data) {
      router.push("/admin/g");
    }
  }, [session]);

  return <AdminScreen />;
};

export default AdminPanel;
