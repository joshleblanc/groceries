import React from 'react';
import Layout from 'meteor/cereal:ui/components/Layout';
import Routes from "./Routes";
import DrawerItems from "./DrawerItems";

export const App = () => (
  <Layout
    Routes={Routes}
    DrawerItems={DrawerItems}
    basename={""}
  />
);
