import { execSync } from "child_process";

try {
  execSync("node seeds/seedArtists.js", { stdio: "inherit" });
  execSync("node seeds/seedEvents.js", { stdio: "inherit" });
  execSync("node seeds/seedTickets.js", { stdio: "inherit" });
  execSync("node seeds/seedGallery.js", { stdio: "inherit" });
  execSync("node seeds/seedVolunteers.js", { stdio: "inherit" });
  console.log("All seeds executed");
} catch (err) {
  console.error("Seed failed", err);
  process.exit(1);
}
