import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Abouthero from "../components/About-hero";

function About() {
  return (
    <MainLayout>
      <Abouthero/>
    </MainLayout>
  );
}

export default About;
