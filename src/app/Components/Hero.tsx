import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-black text-white py-10">
        <nav className="flex justify-between px-4 py-2 bg-gradient-to-r from-blue-900 to-blue-950 shadow-md">
          <div className="text-xl font-semibold">Your Gallery</div>
          <div className="flex space-x-4">
            <Link href="#gallery" className="hover:text-gray-200">Gallery</Link>
            <Link href="#" className="hover:text-gray-200">Other Link</Link>
          </div>
        </nav>
        <div className="text-center mt-6">
          <h1 className="text-4xl font-bold">Welcome to the Gallery</h1>
          <p className="mt-4 text-lg">Explore various folders and images in a professional way</p>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-12 px-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
            <Link href="../AnimalImg">
              <Image
                src="/assets/gulahmed.webp"
                alt="Folder 1"
                width={250}
                height={250}
                className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent w-full p-4">
                <h2 className="text-white text-lg font-semibold">Folder 1</h2>
              </div>
            </Link>
          </div>

          {/* Card 2 */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
            <Link href="../ProductImg">
              <Image
                src="/assets/handparrse.jpg"
                alt="Folder 2"
                width={250}
                height={250}
                className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent w-full p-4">
                <h2 className="text-white text-lg font-semibold">Folder 2</h2>
              </div>
            </Link>
          </div>

          {/* Card 3 */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
            <Link href="../DressImg">
              <Image
                src="/assets/glasses.png"
                alt="Folder 3"
                width={250}
                height={250}
                className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent w-full p-4">
                <h2 className="text-white text-lg font-semibold">Folder 3</h2>
              </div>
            </Link>
          </div>

          {/* Card 4 */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
            <Link href="../FishImg">
              <Image
                src="/assets/images.jpg"
                alt="Folder 4"
                width={250}
                height={250}
                className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent w-full p-4">
                <h2 className="text-white text-lg font-semibold">Folder 4</h2>
              </div>
            </Link>
          </div>
          
          {/* Card 5 */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
            <Link href="../BirdImg">
              <Image
                src="/assets/greatwatch.webp"
                alt="Folder 5"
                width={250}
                height={250}
                className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent w-full p-4">
                <h2 className="text-white text-lg font-semibold">Folder 5</h2>
              </div>
            </Link>
            </div>

          {/* Card 6 */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
            <Link href="../GadgetsImg">
              <Image
                src="/assets/bulb.jpg"
                alt="Folder 6"
                width={250}
                height={250}
                className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent w-full p-4">
                <h2 className="text-white text-lg font-semibold">Folder 6</h2>
              </div>
            </Link>
          </div>

          {/* Card 7 */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
            <Link href="../GroceryImg">
              <Image
                src="/assets/garammasala.jpg"
                alt="Folder 7"
                width={250}
                height={250}
                className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent w-full p-4">
                <h2 className="text-white text-lg font-semibold">Folder 7</h2>
              </div>
            </Link>
          </div>

        

              {/* Card 8 */}
              <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
            <Link href="../ChildImg">
              <Image
                src="/assets/babygift.webp"
                alt="Folder 8"
                width={250}
                height={250}
                className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent w-full p-4">
                <h2 className="text-white text-lg font-semibold">Folder 8</h2>
              </div>
            </Link>
          </div>







        </div>

        

        <div className="text-center mt-6">
          <p className="text-sm">Click on the folders to view the images</p>
        </div>


       
      </section>

      
      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-4 text-center">
        <p>&copy; 2025 Your Gallery. All rights reserved.</p>
      </footer>
    </div>
  );
}