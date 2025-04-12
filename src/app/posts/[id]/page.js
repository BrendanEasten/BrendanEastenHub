"use client";

import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function PostPage() {
  const params = useParams();
  const { id } = params;

  // Example posts data (you can fetch this from an API or external file)
  const posts = [
    {
      id: '1',
      title: 'My 1 year Journey With Computer Programing 👨‍💻',
      content: 'It’s been an incredible year since I started my programming journey, and I’ve learned so much along the way. The most exciting part has been discovering my passion for front-end development. I absolutely love working with HTML, CSS, and JavaScript to build interactive websites, and React has become one of my favorite tools. The ability to create dynamic web applications that people can engage with has been such a rewarding experience. Learning React was initially challenging, but now I feel more confident with components, state, and props, and I’m eager to dive deeper into it. Alongside front-end development, I’ve also explored other programming areas, which has broadened my understanding of the tech world. I’ve spent time learning SQL for database programming, which helped me understand how data is structured, queried, and managed behind the scenes. I’ve also enjoyed working with Python for scripting and data analysis, and even started tackling Java, though I’ll admit, Java has been the most challenging for me. Object-oriented programming in Java has been tough to grasp at times, but I’m slowly getting the hang of it. In addition to my coding skills, I managed to achieve Deans Honors Roll Student For Computer Programming Fall 2024 which I was very proud to accomplish! I’ve learned so much about problem-solving and persistence. Programming isn’t always easy, but the feeling of overcoming challenges and solving problems has made every struggle worthwhile. I’m excited about the future of programming and the endless opportunities for growth and learning. There’s so much more to explore, from new languages to backend development, and I can’t wait to see where this journey takes me. This year has been just the beginning, and I’m looking forward to many more years of coding, learning, and improving my skills. The future of programming is full of potential, and I’m excited to be part of it!'
    },
    {
      id: '2',
      title: 'Why I’ve Always Been Curious About Psychedelics 🍄',
      content: 'Psychedelics have fascinated me for years, especially for their ability to alter perception and promote self-discovery. Through microdosing twice before, I’ve had some profound insights into myself that have been both spiritual and creative. These experiences have allowed me to view the world and my inner self from new perspectives leading to moments of clarity and connection. I’ve often felt a deeper sense of interconnectedness with everything around me as if I’m tapping into something greater. On the creative side psychedelics have opened up new pathways of thinking sparking ideas and inspiration I hadn’t previously considered. A Microsode of shrooms have helped me approach problems and artistic projects with fresh eyes. I’ve felt a surge of creativity, unlocking new ways of expressing myself and connecting to my work. While I’m aware of the risks including the unpredictability of the experience and long term effects, I believe that when used responsibly, psychedelics can be a powerful tool for personal growth. They provide opportunities for spiritual exploration, creative expansion, and self-reflection. The balance of spiritual insight and creative flow is what continues to draw me to psychedelics, and I’m excited to see where these journeys take me in the future.'
    },
  ];

  // Find the current post by ID
  const post = posts.find(p => p.id === id);

  if (!post) {
    return <p>Post not found.</p>;
  }

  return (
    <main>
      <h1 className="post">{post.title}</h1>
      <p className="postcontent">{post.content}</p>
    </main>
  );
}