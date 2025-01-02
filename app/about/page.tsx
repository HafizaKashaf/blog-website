import Image from 'next/image';

export default function About() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center max-sm:py-10 py-32 border-t bg-gray-100 ">
        <div className="w-full max-w-4xl px-8 bg-white shadow-lg rounded-lg">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 flex justify-center items-center mb-8 md:mb-0">
              <div className="relative w-48 max-sm:h-48 h-58 overflow-hidden">
                <img
                  src="/images/code.jpg"
                  alt="Profile"
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="w-full py-5 md:w-2/3 flex flex-col justify-center">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">About us</h1>
              <p className="text-gray-600 text-sm mb-4">
                Welcome to 404FoundDiaries a hub for coders, developers, and tech enthusiasts who are passionate about building, learning, and sharing knowledge. Here, you'll find a collection of articles, tutorials, and resources to help you on your coding journey. Whether you're just starting out or looking to sharpen your skills, you'll find a variety of resources and insights here. Let's explore the world of programming together!
              </p>
              <p className="text-gray-600 text-lg">
              As a passionate coder and a second-year student on a journey to master the art of programming, I started this blog to share my experiences, insights, and lessons learned along the way. Whether you're a fellow student, a seasoned developer, or someone just starting to explore the world of code, this blog is for you.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">What You'll Find Here</h2>
            <p className="mt-4 text-lg text-gray-600">
            404FoundDiaries is more than just a collection of posts  it's a resource for learning, exploring, and staying inspired. Here's what you can expect:
            </p>
          </div>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3">
                <img src="/images/technology.jpg" alt="Harry as a beginner" className="w-full rounded-lg shadow-lg" />
              </div>
              <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0 ">
              <ul className='flex flex-col gap-2 px-2'>
              <li>
                <p className=" text-gray-600"><span className='font-bold'>Practical Tutorials:</span> Easy-to-follow guides to help you learn coding concepts, tools, and techniques.</p>
                </li>
                <li>
                <p className=" text-gray-600"><span className='font-bold'>  Personal Experiences:</span> 
                Stories from my coding journey, including challenges faced, solutions found, and lessons learned.
                </p>
                </li>
                <li>
                <p className=' text-gray-600'><span className='font-bold'>Tech Insights:</span> 
                 Explorations of the latest trends, programming languages, and frameworks shaping the industry.
                </p>
                </li>
                <li>
                <p className=' text-gray-600'><span className='font-bold'> Inspiring Projects:</span> 
                A showcase of real-world coding projects to spark your creativity and motivate your own endeavors.
                </p>
                </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/3">
                <img src="/images/support.jpg" alt="Harry learning new skills" className="w-full rounded-lg shadow-lg" />
              </div>
              <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
                <p className="mt-4 text-gray-600 px-3">
                The goal of this blog is to foster a community where coders can learn, grow, and support each other. I believe that coding is not just about writing code  it's about solving problems, building connections, and creating impactful solutions.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3">
                <img src="/images/join.jpg" alt="Harry working on a big project" className="w-full rounded-lg shadow-lg h-[50%]" />
              </div>
              <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800">Join the Journey</h3>
                <p className="mt-4 text-gray-600 px-3">
                Coding is more than just writing scripts  it's about solving problems, unleashing creativity, and shaping the future. Together, let's explore the boundless possibilities of technology.

               Let's code, learn, and innovate!


                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/3">
                <img src="/images/connect.jpg" alt="Harry mentoring others" className="w-full rounded-lg shadow-lg" />
              </div>
              <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800">Let's Connect!</h3>
                <p className="mt-4 text-gray-600 px-3">
                Thank you for stopping by and being part of this journey. Whether you're here to learn, share, or explore, I hope you find value in what I share. Together, let's grow as coders and make an impact through technology.


                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}