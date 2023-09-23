import Link from "next/link";
const About = () => {
  return (
    <div>
      <h1>About page Inside About</h1>
      <br />
      <Link href="/about/aboutstudent">Go To About Student</Link>
    </div>
  );
};
export default About;
