import AppBanner from "../components/shared/AppBanner";
import ProjectsGrid from "../components/projects/ProjectsGrid";
import { ProjectsProvider } from "../context/ProjectsContext";
import AppSkills from "../components/shared/AppSkills";

const Home = () => {
  return (
    <div className="container mx-auto">
      <div style={{ marginTop: 110, marginBottom: 120 }}>
        <AppBanner></AppBanner>
      </div>
      <ProjectsProvider>
        <ProjectsGrid></ProjectsGrid>
      </ProjectsProvider>

      <AppSkills />
    </div>
  );
};

export default Home;
