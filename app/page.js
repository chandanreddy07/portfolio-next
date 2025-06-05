export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-3xl mx-auto space-y-10">
        <header className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-purple-400">KOYYA CHANDAN REDDY</h1>
          <p className="mt-2 text-lg sm:text-xl text-gray-300">
            Aspiring Software Developer | Java &bull; SQL &bull; DSA &bull; Python &bull; C
          </p>
        </header>

        <section>
          <h2 className="text-2xl font-semibold text-purple-300 mb-2">About Me</h2>
          <p className="bg-gray-800 p-4 rounded shadow">
            I&apos;m a B.Tech student at Gayatri Vidya Parishad College of Engineering, passionate about solving
            real-world problems using code. I&apos;ve developed a water delivery app and specialize in Java, SQL, DSA, Python, and C.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-purple-300 mb-2">Skills</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 bg-gray-800 p-4 rounded shadow">
            {['Java', 'SQL', 'DSA', 'Python', 'C'].map(skill => (
              <li key={skill} className="text-center py-2 bg-purple-700 rounded">{skill}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-purple-300 mb-2">Projects</h2>
          <div className="bg-gray-800 p-4 rounded shadow">
            <h3 className="text-xl font-bold text-purple-200">💧 Water Delivery App</h3>
            <p className="mt-2 text-gray-300">
              A real-time app for managing water delivery orders with tracking and payment integration.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-purple-300 mb-2">Coding Profiles</h2>
          <div className="space-y-2 bg-gray-800 p-4 rounded shadow">
            <p>⚡ LeetCode: <a className="text-blue-400 hover:underline" href="https://leetcode.com/your-username" target="_blank" rel="noopener noreferrer">leetcode.com/your-username</a></p>
            <p>📘 GeeksforGeeks: <a className="text-blue-400 hover:underline" href="https://auth.geeksforgeeks.org/user/your-username" target="_blank" rel="noopener noreferrer">geeksforgeeks.org/user/your-username</a></p>
            <p>🔥 CodeChef: <a className="text-blue-400 hover:underline" href="https://www.codechef.com/users/your-username" target="_blank" rel="noopener noreferrer">codechef.com/users/your-username</a></p>
            <p>🏅 HackerRank: <a className="text-blue-400 hover:underline" href="https://www.hackerrank.com/your-username" target="_blank" rel="noopener noreferrer">hackerrank.com/your-username</a></p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-purple-300 mb-2">Contact</h2>
          <div className="bg-gray-800 p-4 rounded shadow space-y-1">
            <p>📧 Email: <a className="text-blue-400 hover:underline" href="mailto:chinnuchandan11@gmail.com">chinnuchandan11@gmail.com</a></p>
            <p>🌐 GitHub: <a className="text-blue-400 hover:underline" href="https://github.com/chaandanreddy07" target="_blank" rel="noopener noreferrer">github.com/your-username</a></p>
            <p>💼 LinkedIn: <a className="text-blue-400 hover:underline" href="https://linkedin.com/in/koyya chandan reddy" target="_blank" rel="noopener noreferrer">linkedin.com/in/your-profile</a></p>
          </div>
        </section>
      </div>
    </main>
  );
}
