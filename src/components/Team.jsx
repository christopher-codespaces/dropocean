import React from "react";

// Define the team data array
const teamMembers = [
  {
    name: "Christopher Makombe",
    role: "Project Manager",
    bio: "Mastering projects with a blend of precision and creativity.",
    image:
      "/chris.png",
  },
  {
    name: "Nicholas Neto",
    role: "Digital Marketing Expert",
    bio: "Turning clicks into connections and data into strategy.",
    image:
      "/nick.png",
  },
  {
    name: "Daniel Volynets",
    role: "UX Designer",
    bio: "Designing user experiences that are both intuitive and delightful.",
    image:
      "https://pbs.twimg.com/profile_images/1818685523378290692/-olt-_3r_400x400.jpg",
  },
  {
    name: "Zayed Alam",
    role: "Software Developer",
    bio: "Coding solutions that turn complex problems into elegant results.",
    image: "https://zayedalam.com/assets/Zayed-b6072bd7.jpg",
  },
];


export default function Team() {
  return (
    <section className="bg-inherit mt-20  py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-black text-center mb-12">
          Meet Our Team
        </h2>
        <div className="flex flex-wrap gap-8 justify-center overflow-hidden">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="border rounded-md overflow-hidden max-md:max-w-[300px]">
              <img
                src={member.image}
                className="w-full h-60  bg-white object-contain object-top "
                alt={member.name}
              />
              <div className="p-4">
                <h4 className="text-white text-2xl  font-bold">
                  {member.name}
                </h4>
                <p className="text-white text-xs mt-1">{member.role}</p>
                <div className="mt-4">
                  <p className="text-white text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
