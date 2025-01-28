"use client"
import { useRouter } from "next/router";
const blogs = [
    {
      id: "blog-one",
      img:'/Shorts/black2.webp',
      date: "August 12, 2023 - by Designthemes",
      author: "by Designthemes",
      title: "An Unforgettable Emanation of Individuality Where Elegance Finds Its Extraordinary Artistry",
      description: "Suspendisse viverra commodo semper. Donec facilisis odio vitae diam lacinia, vel venenatis nibh mattis. Vestibulum odio dolor.",
    },
    {
      id: "blog-two",
      img:'/Shorts/black2.webp',
      date: "August 12, 2023 - by Designthemes",
      author: "by Designthemes",
      title: "Captivatingly Classy Jewelry for the Discerning Unveiling the Essence of Timelessness",
      description: "Suspendisse viverra commodo semper. Donec facilisis odio vitae diam lacinia, vel venenatis nibh mattis. Vestibulum odio dolor.",
    },
    {
      id: "blog-three",
      img:'/Shorts/black2.webp',
      date: "August 12, 2023 - by Designthemes",
      author: "by Designthemes",
      title: "Step into the Spotlight with Glamorous Jewelry Leave Everyone Speechless",
      description: "Suspendisse viverra commodo semper. Donec facilisis odio vitae diam lacinia, vel venenatis nibh mattis. Vestibulum odio dolor.",
    },
    {
      id: "blog-four",
      img:'/Shorts/black2.webp',
      date: "August 12, 2023 - by Designthemes",
      author: "by Designthemes",
      title: "Wearing Our Jewelry Makes the World a Funnier Place Make Everything Better Trust.",
      description: "Suspendisse viverra commodo semper. Donec facilisis odio vitae diam lacinia, vel venenatis nibh mattis. Vestibulum odio dolor.",
    },
    {
      id: "blog-five",
      img:'/Shorts/black2.webp',
      date: "August 12, 2023 - by Designthemes",
      author: "by Designthemes",
      title: "Our Jewelry Adds a Dash of Humor to Your Fashion Game Boring Jewelry",
      description: "Suspendisse viverra commodo semper. Donec facilisis odio vitae diam lacinia, vel venenatis nibh mattis. Vestibulum odio dolor.",
    },
    {
      id: "blog-six",
      img:'/Shorts/black2.webp',
      date: "August 12, 2023 - by Designthemes",
      author: "by Designthemes",
      title: "Because Life Deserves a Good Laugh and Some Bling Wear Our Funny Jewelry",
      description: "Suspendisse viverra commodo semper. Donec facilisis odio vitae diam lacinia, vel venenatis nibh mattis. Vestibulum odio dolor.",
    },
  ];
export default function AboutBlog(){
    const router = useRouter();
  const { blogid } = router.query;

  // Проверка, готов ли router, чтобы избежать ошибок загрузки
  if (!router.isReady) {
    return <p>Загрузка...</p>;
  }

  // Поиск нужного блога по идентификатору
  const blog = blogs.find((b) => b.id === blogid);

  // Если блог не найден
  if (!blog) {
    return <p>Блог не найден</p>;
  }
    return(
      <div className="px-[3%] py-[3%] w-full h-auto flex flex-col">
  <p className="text-gray-700 text-sm xs:text-base xss:text-lg l3d:text-xl">{blog.date}</p>
  <h1 className="text-xl font-bold mb-4 xs:text-3xl xss:text-4xl l3d:text-5xl mx:text-6xl mxx:text-7xl">{blog.title}</h1>

  <img
    src={blog.img}
    alt={blog.title}
    className="w-full h-[250px] xs:h-[300px] xss:h-[350px] des:h-[400px] l3d:h-[500px] mx:h-[600px] mxx:h-[700px] object-cover rounded-lg"
  />

  <div className="w-full flex flex-col xs:flex-row xs:justify-between xs:items-center my-4 text-sm xs:text-base xss:text-lg l3d:text-xl">
    <p className="text-lg">My Admin</p>
    <p className="text-lg">7 SEPTEMBER, 2023 / 1 Comments</p>
  </div>

  <div className="text-justify text-sm xs:text-base xss:text-lg l3d:text-xl leading-6 xs:leading-8">
    <p>
      Nam vehicula purus mi, quis bibendum metus hendrerit volutpat. Orci varius natoque penatibus et magnis dis
      parturient montes, nascetur ridiculus mus. Integer rutrum placerat nibh, ac finibus turpis porta vel. Donec ornare
      vitae massa et lacinia. Donec accumsan congue est et vulputate. Nunc pretium nibh id dui ornare porttitor ac in
      metus. Sed ut felis libero. Integer et magna varius, imperdiet nisl a, tincidunt nulla. Aliquam erat volutpat. Ut
      nisl quam, vestibulum eget arcu in, tempor gravida lorem. Nullam rutrum euismod libero at vestibulum. Etiam
      sodales efficitur lectus. Nam eleifend velit vitae ipsum maximus ullamcorper. Pellentesque habitant morbi
      tristique senectus et netus et malesuada fames ac turpis egestas. Quisque ornare quam in sodales congue.
    </p>
  </div>

  <h2 className="mt-6 mb-4 text-lg font-bold xs:text-2xl xss:text-3xl l3d:text-4xl mx:text-5xl mxx:text-6xl">Inspired by Elegance Crafted :</h2>

  <div className="text-justify text-sm xs:text-base xss:text-lg l3d:text-xl leading-6 xs:leading-8">
    <p>
      Nam vehicula purus mi, quis bibendum metus hendrerit volutpat. Orci varius natoque penatibus et magnis dis
      parturient montes, nascetur ridiculus mus. Integer rutrum placerat nibh, ac finibus turpis porta vel. Donec ornare
      vitae massa et lacinia. Donec accumsan congue est et vulputate. Nunc pretium nibh id dui ornare porttitor ac in
      metus. Sed ut felis libero. Integer et magna varius, imperdiet nisl a, tincidunt nulla. Aliquam erat volutpat. Ut
      nisl quam, vestibulum eget arcu in, tempor gravida lorem. Nullam rutrum euismod libero at vestibulum. Etiam
      sodales efficitur lectus.
    </p>
  </div>
</div>

    
    )
}