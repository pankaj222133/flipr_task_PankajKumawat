import React from 'react';
import AdminProjectForm from '../components/AdminProjectForm';
import AdminClientForm from '../components/AdminClientForm';
import ContactList from '../components/ContactList';
import SubscriberList from '../components/SubscriberList';

const AdminPanel = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Admin Panel</h1>
      
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">Add New Project</h2>
        <AdminProjectForm />
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">Add New Client</h2>
        <AdminClientForm />
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">Contact Form Responses</h2>
        <ContactList />
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Newsletter Subscriptions</h2>
        <SubscriberList />
      </section>
    </div>
  );
};

export default AdminPanel;
