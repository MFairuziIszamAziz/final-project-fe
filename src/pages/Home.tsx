import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Label, TextInput } from "flowbite-react";

const Greeting: React.FC = () => (
  <div className="container mx-auto px-4 py-8 text-center">
    <main className="mx-auto mt-10 flex flex-col px-4 sm:px-6 md:px-8 lg:flex-row lg:px-8">
      <div className="flex flex-1 flex-col justify-center text-center lg:text-left">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
          <span className="block xl:inline">We help you to find your</span>{" "}
          <span className="block text-indigo-700 xl:inline">Dream Job</span>
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:text-lg md:text-xl">
          DreamJob is the worldwide leader on insights about jobs and companies.
          Search millions of jobs and get the inside scoop on companies with
          employee reviews, personalized salary tools, and more. Hiring? Post a
          job for free.
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow">
            <Link
              to="job-vacancy"
              className="flex items-center justify-center rounded-md border border-transparent bg-indigo-700 px-6 py-3 text-base font-medium text-white hover:bg-indigo-800"
            >
              Open Vacancy
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
          <div className="mt-3 sm:ml-3 sm:mt-0">
            <Link
              to="/dashboard"
              className="flex items-center justify-center rounded-md border border-transparent bg-indigo-200 px-6 py-3 text-base font-medium text-indigo-800 hover:bg-indigo-300"
            >
              Dashboard
            </Link>
          </div>
        </div>
      </div>
      <div className="relative lg:w-1/2 lg:pl-8">
        <img
          className="h-48 w-full object-cover sm:h-64 md:h-80 lg:h-full"
          src="https://media.istockphoto.com/photos/portrait-of-a-man-using-a-computer-in-a-modern-office-picture-id1344688156?b=1&k=20&m=1344688156&s=170667a&w=0&h=GWBMc5h9yv3gIKjvlbcfpz9UgdvCDM2i3kyNoZKL8UY="
          alt="Foto Hero"
          style={{ filter: "brightness(85%)" }}
        />
      </div>
    </main>
  </div>
);

const FindYourPassion: React.FC = () => (
  <div className="container mx-auto px-4 py-8 text-center">
    <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">
      Find Your Passion
    </h2>
    <p className="mb-6 text-base sm:text-lg">
      Discover opportunities and paths that align with your interests and goals.
    </p>
  </div>
);

interface Job {
  _id: string;
  title: string;
  job_description: string;
  job_qualification: string;
  job_type: string;
  job_tenure: string;
  job_status: number;
  company_name: string;
  company_image_url: string;
  company_city: string;
  salary_min: number;
  salary_max: number;
  createdAt: string;
}

const JobsAvailable: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch jobs from API
    fetch("https://job-vacancy-api.vercel.app/api/jobs")
      .then((response) => response.json())
      .then((data) => {
        setJobs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching jobs:", err);
        setError("Failed to load jobs");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="mb-4 text-center text-2xl font-semibold sm:text-3xl">
        Jobs Available
      </h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <Card
            key={job._id}
            className="mx-auto max-w-xs"
            imgAlt={job.company_name}
            imgSrc={job.company_image_url}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {job.title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {job.job_description}
            </p>
            <p className="text-gray-500 dark:text-gray-300">
              {job.job_qualification} - {job.job_type} - {job.job_tenure}
            </p>
            <p className="text-gray-500 dark:text-gray-300">
              Salary: ${job.salary_min.toLocaleString()} - $
              {job.salary_max.toLocaleString()}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
};

const TopCompanies: React.FC = () => (
  <div className="container mx-auto px-4 py-8 text-center">
    <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">Top Companies</h2>
    <p className="mb-6 text-base sm:text-lg">
      Explore some of the top companies we work with.
    </p>
    {/* Add images or list of companies here */}
  </div>
);

const NewsletterSignup: React.FC = () => (
  <div className="container mx-auto flex flex-col items-center px-4 py-8">
    <h2 className="mb-6 text-center text-2xl font-semibold">
      Sign Up for Our Newsletter
    </h2>
    <Card className="w-full max-w-lg p-6">
      <p className="mb-6 text-center">
        Stay updated with the latest news and offers by subscribing to our
        newsletter.
      </p>
      <form className="flex flex-col gap-4">
        <div>
          <Label htmlFor="email" value="Your email address" />
          <TextInput
            id="email"
            type="email"
            placeholder="name@flowbite.com"
            required
            className="mt-1"
          />
        </div>
        <Button type="submit" className="self-center">
          Subscribe
        </Button>
      </form>
    </Card>
  </div>
);

// Komponen Utama Halaman
const Homepage: React.FC = () => (
  <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
    <Greeting />
    <FindYourPassion />
    <JobsAvailable />
    <TopCompanies />
    <NewsletterSignup />
  </div>
);

export default Homepage;
