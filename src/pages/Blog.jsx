import React from "react";
import { Link } from "react-router-dom";
import PageHeading from "../Components/PageHeading";
import BlogCompo from "../Components/BlogCompo";
import Blog1 from "../assets/Blog1.png";
import Blog2 from "../assets/Blog2.png";
import Blog3 from "../assets/Blog3.png";

import BlogSm from "../assets/BlogSm.png";
import BlogSm2 from "../assets/BlogSm2.png";
import BlogSm3 from "../assets/BlogSm3.png";
import BlogSm4 from "../assets/BlogSm4.png";

const Blog = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div>
          <PageHeading heading="Blog Page" pageName="Blog Page" />
        </div>
        <div className="flex gap-10 ">
          <div className="w-[#60]">
            <BlogCompo
              image={Blog1}
              heading="Mauris at orci non vulputate diam tincidunt nec."
            />
          </div>
          <div className="w-[40%]">
            <div className="flex flex-col mt-20">
              <h6 className="text-[#151875] text-xl">Search</h6>
              <input className=" outline-blue-100 py-1 px-3 w-[300px]" type="search" placeholder="Search" />
            </div>
            <div className="flex flex-col mt-20">
              <h6 className="text-[#151875] text-xl">Categories</h6>
           <div className="flex gap-8">
           <div className="mt-5 text-secondary text-sm">
                <p className="hover:bg-primary duration-700 ease-in-out px-4 py-1 rounded-sm hover">Women (21)</p>
                <p className="hover:bg-primary duration-700 ease-in-out px-4 py-1 rounded-sm hover">Women (21)</p>
                <p className="hover:bg-primary duration-700 ease-in-out px-4 py-1 rounded-sm hover">Women (21)</p>
              </div>
              <div className="mt-5 text-secondary text-sm">
                <p className="hover:bg-primary duration-700 ease-in-out px-4 py-1 rounded-sm hover">Women (21)</p>
                <p className="hover:bg-primary duration-700 ease-in-out px-4 py-1 rounded-sm hover">Women (21)</p>
                <p className="hover:bg-primary duration-700 ease-in-out px-4 py-1 rounded-sm hover">Women (21)</p>
              </div>
           </div>
          <div>
          <div className="flex items-center gap-3 mt-6">
            <div>
              <img src={BlogSm} alt="" />
            </div>
            <div>
              <h6 className="text-secondary text-sm">It is a long established fact</h6>
              <p className="text-[#8A8FB9] text-xs">Aug 09 2020</p>
            </div>
           </div>
           <div className="flex items-center gap-3 mt-6">
            <div>
              <img src={BlogSm2} alt="" />
            </div>
            <div>
              <h6 className="text-secondary text-sm">It is a long established fact</h6>
              <p className="text-[#8A8FB9] text-xs">Aug 09 2020</p>
            </div>
           </div>
           <div className="flex items-center gap-3 mt-6">
            <div>
              <img src={BlogSm3} alt="" />
            </div>
            <div>
              <h6 className="text-secondary text-sm">It is a long established fact</h6>
              <p className="text-[#8A8FB9] text-xs">Aug 09 2020</p>
            </div>
           </div>
           <div className="flex items-center gap-3 mt-6">
            <div>
              <img src={BlogSm4} alt="" />
            </div>
            <div>
              <h6 className="text-secondary text-sm">It is a long established fact</h6>
              <p className="text-[#8A8FB9] text-xs">Aug 09 2020</p>
            </div>
           </div>
          </div>
            </div>
          </div>
        </div>
        <div className="flex gap-10 ">
          <div className="w-[#60]">
            <BlogCompo
              image={Blog2}
              heading="Aenean vitae in aliquam ultrices lectus. Etiam."
            />
          </div>
          <div className="w-[40%]">
            <div className="flex flex-col mt-20">
              <h6 className="text-[#151875] text-xl">Search</h6>
              <input className=" outline-blue-100 py-1 px-3 w-[300px]" type="search" placeholder="Search" />
            </div>
            <div className="flex flex-col mt-20">
              <h6 className="text-[#151875] text-xl">Categories</h6>
           <div className="flex gap-8">
           <div className="mt-5 text-secondary text-sm">
                <p className="hover:bg-primary duration-700 ease-in-out px-4 py-1 rounded-sm hover">Women (21)</p>
                <p className="hover:bg-primary duration-700 ease-in-out px-4 py-1 rounded-sm hover">Women (21)</p>
                <p className="hover:bg-primary duration-700 ease-in-out px-4 py-1 rounded-sm hover">Women (21)</p>
              </div>
              <div className="mt-5 text-secondary text-sm">
                <p className="hover:bg-primary duration-700 ease-in-out px-4 py-1 rounded-sm hover">Women (21)</p>
                <p className="hover:bg-primary duration-700 ease-in-out px-4 py-1 rounded-sm hover">Women (21)</p>
                <p className="hover:bg-primary duration-700 ease-in-out px-4 py-1 rounded-sm hover">Women (21)</p>
              </div>
           </div>
          <div>
          <div className="flex items-center gap-3 mt-6">
            <div>
              <img src={BlogSm} alt="" />
            </div>
            <div>
              <h6 className="text-secondary text-sm">It is a long established fact</h6>
              <p className="text-[#8A8FB9] text-xs">Aug 09 2020</p>
            </div>
           </div>
           <div className="flex items-center gap-3 mt-6">
            <div>
              <img src={BlogSm2} alt="" />
            </div>
            <div>
              <h6 className="text-secondary text-sm">It is a long established fact</h6>
              <p className="text-[#8A8FB9] text-xs">Aug 09 2020</p>
            </div>
           </div>
           <div className="flex items-center gap-3 mt-6">
            <div>
              <img src={BlogSm3} alt="" />
            </div>
            <div>
              <h6 className="text-secondary text-sm">It is a long established fact</h6>
              <p className="text-[#8A8FB9] text-xs">Aug 09 2020</p>
            </div>
           </div>
           <div className="flex items-center gap-3 mt-6">
            <div>
              <img src={BlogSm4} alt="" />
            </div>
            <div>
              <h6 className="text-secondary text-sm">It is a long established fact</h6>
              <p className="text-[#8A8FB9] text-xs">Aug 09 2020</p>
            </div>
           </div>
          </div>
            </div>
          </div>
        </div>
        <div className="flex gap-10 ">
          <div className="w-[#60]">
            <BlogCompo
              image={Blog3}
              heading="Sit nam congue feugiat nisl, mauris amet nisi. "
            />
          </div>
          <div className="w-[40%]">
            <div className="flex flex-col mt-20">
              <h6 className="text-[#151875] text-xl">Search</h6>
              <input className=" outline-blue-100 py-1 px-3 w-[300px]" type="search" placeholder="Search" />
            </div>
            <div className="flex flex-col mt-20">
              <h6 className="text-[#151875] text-xl">Categories</h6>
           <div className="flex gap-8">
           <div className="mt-5 text-secondary text-sm">
                <p className="hover:bg-primary duration-700 ease-in-out px-4 py-1 rounded-sm hover">Women (21)</p>
                <p className="hover:bg-primary duration-700 ease-in-out px-4 py-1 rounded-sm hover">Women (21)</p>
                <p className="hover:bg-primary duration-700 ease-in-out px-4 py-1 rounded-sm hover">Women (21)</p>
              </div>
              <div className="mt-5 text-secondary text-sm">
                <p className="hover:bg-primary duration-700 ease-in-out px-4 py-1 rounded-sm hover">Women (21)</p>
                <p className="hover:bg-primary duration-700 ease-in-out px-4 py-1 rounded-sm hover">Women (21)</p>
                <p className="hover:bg-primary duration-700 ease-in-out px-4 py-1 rounded-sm hover">Women (21)</p>
              </div>
           </div>
          <div>
          <div className="flex items-center gap-3 mt-6">
            <div>
              <img src={BlogSm} alt="" />
            </div>
            <div>
              <h6 className="text-secondary text-sm">It is a long established fact</h6>
              <p className="text-[#8A8FB9] text-xs">Aug 09 2020</p>
            </div>
           </div>
           <div className="flex items-center gap-3 mt-6">
            <div>
              <img src={BlogSm2} alt="" />
            </div>
            <div>
              <h6 className="text-secondary text-sm">It is a long established fact</h6>
              <p className="text-[#8A8FB9] text-xs">Aug 09 2020</p>
            </div>
           </div>
           <div className="flex items-center gap-3 mt-6">
            <div>
              <img src={BlogSm3} alt="" />
            </div>
            <div>
              <h6 className="text-secondary text-sm">It is a long established fact</h6>
              <p className="text-[#8A8FB9] text-xs">Aug 09 2020</p>
            </div>
           </div>
           <div className="flex items-center gap-3 mt-6">
            <div>
              <img src={BlogSm4} alt="" />
            </div>
            <div>
              <h6 className="text-secondary text-sm">It is a long established fact</h6>
              <p className="text-[#8A8FB9] text-xs">Aug 09 2020</p>
            </div>
           </div>
          </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
