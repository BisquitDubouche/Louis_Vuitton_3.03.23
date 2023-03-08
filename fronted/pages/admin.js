import React, { useState } from "react";
import { MainLayout } from "@/components/main_layout";
import Navbar from "@/components/navbar/Navbar";
import Add from "@/components/admin/add";
import Update from "@/components/admin/update";
import Delete from "@/components/admin/delete";

const Admin = () => {
  

  return (
    <MainLayout title='ADMIN LV'>
      <Navbar />
      <div>
        <Add />
      </div>
      <div>
        <Update />
      </div>
      <div>
        <Delete />
      </div>
    </MainLayout>
  );
};

export default Admin;
