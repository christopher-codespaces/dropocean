import React from "react";

// Define the team data array
const teamMembers = [
  {
    name: "Christopher Makombe",
    role: "Project Manager",
    bio: "Mastering projects with a blend of precision and creativity.",
    image:
      "https://instagram.fcpt1-1.fna.fbcdn.net/v/t51.2885-19/431004240_1442178816389800_7405429776496454293_n.jpg?_nc_ht=instagram.fcpt1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=ml24I_wkKRYQ7kNvgGefcjn&edm=AEhyXUkBAAAA&ccb=7-5&oh=00_AYDmjmEwBPJG5YnUk26OCAWNyp30od6wMvVKkyQrhQEuyw&oe=66C15B0C&_nc_sid=8f1549",
  },
  {
    name: "Nicholas Neto",
    role: "Digital Marketing Expert",
    bio: "Turning clicks into connections and data into strategy.",
    image:
      "https://media.licdn.com/dms/image/D4E03AQEXRTqt-8h-KA/profile-displayphoto-shrink_800_800/0/1718832125842?e=1729123200&v=beta&t=Epcc3p6gW3COnBUt4KkhamctdF0N2XomnNk3Uvqhynk",
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
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-12">
          Meet Our Team
        </h2>
        <div className="flex flex-wrap gap-8 justify-center overflow-hidden">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="border rounded-md overflow-hidden max-md:max-w-[300px]">
              <img
                src={member.image}
                className="w-full h-60 object-contain object-top bg-gray-200"
                alt={member.name}
              />
              <div className="p-4">
                <h4 className="text-gray-800 text-base font-bold">
                  {member.name}
                </h4>
                <p className="text-gray-600 text-xs mt-1">{member.role}</p>
                <div className="mt-4">
                  <p className="text-gray-600 text-sm leading-relaxed">
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
