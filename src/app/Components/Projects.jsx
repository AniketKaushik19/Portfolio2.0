import React from  'react'
import ProjectCard from './ProjectCard'
function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard title="Mentora" description="An AI‑powered community platform where learners connect, share, and grow together.
         It generates personalized courses, analyzes resumes, and crafts tailored cover letters.
         Smart study roadmaps guide users step‑by‑step toward their career and learning goals." link="https:/Mentora-sage.vercel.app" tags={["Next.js", "Clerk", "Gemini" ,"inngest","neon" ,"convex","drizzle-orm","chart.js","imagekit" ,"pdfReader" ,"zod" ,"shadcn"]} />
         
        <ProjectCard title="Let's talk" description="Planned and developed a global language exchange platform for native language communication." link="https://lets-talk-d25a.onrender.com/" tags={["React.js", "Tailwind", "stream.io" , "tanstack/react-query" , "Zustand" ,"express", "JWT" , "Node.js" ,"Mongodb"]} />

        <ProjectCard title="Kaushik Hospital" description="Users can create and manage profiles for seamless appointment booking and medical history tracking." link="https://kaushik-hospital.web.app/" tags={["React.js", "bcrypt", "cloudinary", "JWT" , "Multer","Validator", "Node.js", "MongoDB" , "firebase"]} />

        <ProjectCard title="Kaushik Hospital Admin" description="Admin panel to manage bookings, add new doctors, delete entries, and update doctor status. Dedicated doctor panel to view and manage appointments, update profiles, and track schedule." link="https://kaushik-hospital-admin.web.app/" tags={["React.js", "bcrypt", "Cloudinary", "JWT" , "Multer","Validator","MongoDb" ,"firebase"]} />
            
        <ProjectCard title="Nexxplora 2025" description="Nexxplora is a premier platform for discovering and joining college events. Tailored for students and young minds to spark curiosity, learning, and networking" link="https://Nexxplora2025.vercel.app" tags={["React.js", "daisyui", "firebase", "scrollreveal", "tailwindcss"]} />

        </div>
  )
}

export default Projects