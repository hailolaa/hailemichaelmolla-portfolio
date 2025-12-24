const skills = {
  languages: [
    { name: 'JavaScript', icon: '💛' },
    { name: 'Python', icon: '🐍' },
    { name: 'Dart', icon: '🎯' },
  ],
  frontend: [
    { name: 'React', icon: '⚛️' },
    { name: 'Flutter', icon: '💙' },
    { name: 'HTML/CSS', icon: '🌐' },
    { name: 'Tailwind CSS', icon: '🎨' },
  ],
  backend: [
    { name: 'Node.js', icon: '💚' },
    { name: 'Express.js', icon: '🚂' },
    { name: 'REST APIs', icon: '🔌' },
  ],
  tools: [
    { name: 'Git', icon: '📝' },
    { name: 'VS Code', icon: '💻' },
    { name: 'Networking', icon: '🌐' },
    { name: 'Cybersecurity', icon: '🔒' },
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      
      <div className="container px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="font-mono text-primary mb-4">// skills & tools</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="text-gradient">Tech Stack</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div 
                key={category}
                className="terminal-card"
              >
                <div className="terminal-header">
                  <div className="terminal-dot terminal-dot-red" />
                  <div className="terminal-dot terminal-dot-yellow" />
                  <div className="terminal-dot terminal-dot-green" />
                  <span className="ml-4 font-mono text-sm text-muted-foreground">
                    {category}.config
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-4 capitalize text-primary">
                    {category === 'frontend' ? 'Frontend' : 
                     category === 'backend' ? 'Backend' :
                     category === 'tools' ? 'Tools & DevOps' : 'Languages'}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {items.map((skill, index) => (
                      <span 
                        key={index}
                        className="skill-tag"
                      >
                        <span>{skill.icon}</span>
                        <span>{skill.name}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
