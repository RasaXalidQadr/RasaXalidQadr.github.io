# Skills & Expertise

## Programming Languages
- Java
- C/C++
- Python (basic to intermediate)

## Web Development
- HTML5 & CSS3
- JavaScript (ES6+)
- Responsive design principles

## Database
- MySQL
- Oracle SQL
- Relational database design & CRUD operations

## Tools & Technologies
- Git & GitHub
- VS Code
- Eclipse
- SQL Developer

## Other Skills
- Problem-Solving
- Teamwork
- Fast Learner
- Adaptability

## Languages
- Kurdish (Native)
- English (Advanced)
- Arabic (Intermediate)
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--secondary-color);
  margin: 2rem 0 3rem 0;
  border-left: 4px solid var(--primary-color);
}

.primary-skills {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin: 3rem 0;
}

.skill-primary {
  background: var(--bg-primary);
  border: 1px solid var(--bg-tertiary);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  transition: all 0.3s ease;
}

.skill-primary:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}

.skill-header {
  padding: 2rem;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
  color: white;
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.skill-icon {
  font-size: 3rem;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  flex-shrink: 0;
}

.skill-title {
  flex: 1;
}

.skill-title h3 {
  margin: 0 0 1rem 0;
  font-size: 1.8rem;
  font-weight: 600;
}

.skill-level-bar {
  background: rgba(255, 255, 255, 0.2);
  height: 8px;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  margin-bottom: 0.5rem;
}

.skill-progress {
  height: 100%;
  background: var(--accent-color);
  border-radius: 4px;
  transition: width 2s ease;
}

.skill-progress[data-level="95"] { width: 95%; }
.skill-progress[data-level="90"] { width: 90%; }
.skill-progress[data-level="88"] { width: 88%; }

.skill-percentage {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--accent-color);
}

.skill-details {
  padding: 2rem;
}

.skill-details p {
  color: var(--secondary-color);
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 2rem;
}

.skill-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.feature-group h4 {
  color: var(--primary-color);
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--bg-tertiary);
}

.feature-group ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.feature-group li {
  color: var(--secondary-color);
  padding: 0.5rem 0;
  position: relative;
  padding-left: 1.5rem;
}

.feature-group li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: var(--accent-color);
  font-weight: 600;
}

.api-skills {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.api-skill {
  background: var(--bg-primary);
  border: 1px solid var(--bg-tertiary);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: all 0.2s ease;
}

.api-skill:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.api-header {
  background: var(--bg-secondary);
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.api-header h4 {
  margin: 0;
  color: var(--primary-color);
  font-size: 1.2rem;
  font-weight: 600;
}

.skill-level {
  background: var(--accent-color);
  color: white;
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.api-content {
  padding: 1.5rem;
}

.api-content p {
  color: var(--secondary-color);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.api-features {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.api-tag {
  background: var(--bg-tertiary);
  color: var(--secondary-color);
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid transparent;
  transition: all 0.2s ease;
}

.api-tag:hover {
  border-color: var(--primary-color);
  color: var(--primary-color);
}

.frontend-skills {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.frontend-skill {
  background: var(--bg-primary);
  border: 1px solid var(--bg-tertiary);
  border-radius: 8px;
  padding: 2rem;
  box-shadow: var(--shadow-sm);
  transition: all 0.2s ease;
  text-align: center;
}

.frontend-skill:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.frontend-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.frontend-content h4 {
  color: var(--primary-color);
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
}

.frontend-content p {
  color: var(--secondary-color);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}

.tech-item {
  background: var(--primary-color);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
}

.tools-section {
  margin: 3rem 0;
}

.tool-category {
  margin-bottom: 3rem;
}

.tool-category h4 {
  color: var(--primary-color);
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0 0 1.5rem 0;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--bg-tertiary);
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.tool-item {
  background: var(--bg-secondary);
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid var(--accent-color);
}

.tool-name {
  color: var(--primary-color);
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.tool-desc {
  color: var(--secondary-color);
  font-size: 0.9rem;
  line-height: 1.5;
}

.experience-areas {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.experience-item {
  background: var(--bg-primary);
  border: 1px solid var(--bg-tertiary);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: var(--shadow-sm);
}

.experience-header {
  background: var(--bg-secondary);
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.experience-header h4 {
  margin: 0;
  color: var(--primary-color);
  font-size: 1.1rem;
  font-weight: 600;
}

.experience-level {
  background: var(--primary-color);
  color: white;
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
}

.experience-content {
  padding: 1.5rem;
}

.experience-content ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.experience-content li {
  color: var(--secondary-color);
  padding: 0.5rem 0;
  position: relative;
  padding-left: 1.5rem;
  line-height: 1.5;
}

.experience-content li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--accent-color);
  font-weight: 600;
  font-size: 1.2rem;
}

.learning-section {
  background: var(--bg-secondary);
  padding: 3rem 2rem;
  border-radius: 12px;
  margin: 3rem 0;
  text-align: center;
}

.learning-content h3 {
  color: var(--primary-color);
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 2rem 0;
}

.learning-areas {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  text-align: left;
}

.learning-item {
  background: var(--bg-primary);
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid var(--accent-color);
}

.learning-item h4 {
  color: var(--primary-color);
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
}

.learning-item p {
  color: var(--secondary-color);
  line-height: 1.6;
  margin: 0;
}

.education-section {
  margin: 3rem 0;
}

.education-item {
  background: var(--bg-primary);
  border: 1px solid var(--bg-tertiary);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: var(--shadow-sm);
  display: flex;
  align-items: flex-start;
  gap: 2rem;
}

.education-icon {
  font-size: 3rem;
  color: var(--accent-color);
  flex-shrink: 0;
}

.education-content h4 {
  color: var(--primary-color);
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
}

.education-content p {
  color: var(--secondary-color);
  line-height: 1.6;
  margin: 0.5rem 0;
}

.education-highlights {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.highlight-tag {
  background: var(--primary-color);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
}

.languages-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.language-item {
  background: var(--bg-primary);
  border: 1px solid var(--bg-tertiary);
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: var(--shadow-sm);
}

.language-item h4 {
  color: var(--primary-color);
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
}

.language-level {
  background: var(--accent-color);
  color: white;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 1rem;
}

.language-item p {
  color: var(--secondary-color);
  margin: 0;
  line-height: 1.6;
}

.collaboration-footer {
  background: var(--primary-color);
  color: white;
  padding: 3rem 2rem;
  border-radius: 12px;
  text-align: center;
  margin: 3rem 0;
}

.collaboration-footer h3 {
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
  font-weight: 600;
}

.collaboration-footer p {
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.footer-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.action-btn {
  padding: 12px 24px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s ease;
}

.action-btn.primary {
  background: var(--accent-color);
  color: white;
}

.action-btn.secondary {
  background: transparent;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.action-btn:hover {
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

@media (max-width: 768px) {
  .skill-header {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
  
  .skill-features {
    grid-template-columns: 1fr;
  }
  
  .api-skills {
    grid-template-columns: 1fr;
  }
  
  .frontend-skills {
    grid-template-columns: 1fr;
  }
  
  .tools-grid {
    grid-template-columns: 1fr;
  }
  
  .experience-areas {
    grid-template-columns: 1fr;
  }
  
  .learning-areas {
    grid-template-columns: 1fr;
  }
  
  .languages-section {
    grid-template-columns: 1fr;
  }
  
  .education-item {
    flex-direction: column;
    text-align: center;
  }
  
  .api-header {
    flex-direction: column;
    gap: 1rem;
  }
  
  .experience-header {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
