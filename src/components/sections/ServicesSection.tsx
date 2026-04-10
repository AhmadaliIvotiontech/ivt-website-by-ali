import { useState } from 'react'

const tabCategories = [
  {
    id: 'ai-tech',
    title: 'AI Technologies',
    items: [
      { title: 'Open AI', icon: 'assets/img/open-ai.svg' },
      { title: 'Codex', icon: 'assets/img/codex.svg' },
      { title: 'Vertex AI', icon: 'assets/img/vertex-ai.svg' },
      { title: 'Cloud Vision', icon: 'assets/img/cloud-vision.svg' },
      { title: 'OpenCV', icon: 'assets/img/open-cv.svg' },
      { title: 'TensorFlow', icon: 'assets/img/tensor-flow.svg' },
      { title: 'Bot Framework', icon: 'assets/img/bot-framework.svg' },
      { title: 'Cloud Natural Language', icon: 'assets/img/cloud-natural.svg' },
      { title: 'Congnitive Services', icon: 'assets/img/congnitive.svg' },
      { title: 'Mistral', icon: 'assets/img/misttral.svg' },
      { title: 'Gemini', icon: 'assets/img/gemini.svg' },
      { title: 'IBM Watson', icon: 'assets/img/IBM-watson.svg' },
      { title: 'Anthropic', icon: 'assets/img/anthropic.svg' },
      { title: 'LLama', icon: 'assets/img/llama.svg' },
    ],
  },
  {
    id: 'mobile',
    title: 'Mobile',
    items: [
      { title: 'iOS', icon: 'assets/img/ios.svg' },
      { title: 'Android', icon: 'assets/img/android.svg' },
      { title: 'React Native', icon: 'assets/img/react.svg' },
      { title: 'Flutter', icon: 'assets/img/flutter.svg' },
      { title: 'Ionic', icon: 'assets/img/ionic.svg' },
      { title: 'Swift', icon: 'assets/img/swift.svg' },
      { title: 'Kotlin', icon: 'assets/img/kotlin.svg' },
      { title: 'Titanium', icon: 'assets/img/titanium.svg' },
    ],
  },
  {
    id: 'front-end',
    title: 'Front End',
    items: [
      { title: 'Angular JS', icon: 'assets/img/angular.svg' },
      { title: 'React JS', icon: 'assets/img/react.svg' },
      { title: 'TypeScript', icon: 'assets/img/ts.svg' },
      { title: 'Vue', icon: 'assets/img/vue.svg' },
      { title: 'HTML5', icon: 'assets/img/html5.svg' },
    ],
  },
  {
    id: 'database',
    title: 'Data Base',
    items: [
      { title: 'Mongo DB', icon: 'assets/img/mongo.svg' },
      { title: 'MySQL', icon: 'assets/img/mysql.svg' },
      { title: 'MsSQL', icon: 'assets/img/mssql.svg' },
      { title: 'Firebase', icon: 'assets/img/firebase.svg' },
      { title: 'DynamoDB', icon: 'assets/img/dynamo.svg' },
      { title: 'Oracle', icon: 'assets/img/oracle.svg' },
      { title: 'PostgreSQL', icon: 'assets/img/postgre.svg' },
      { title: 'Redis', icon: 'assets/img/redis.svg' },
    ],
  },
  {
    id: 'backend',
    title: 'Back End',
    items: [
      { title: 'PHP', icon: 'assets/img/php.svg' },
      { title: 'Java', icon: 'assets/img/java.svg' },
      { title: '.NET', icon: 'assets/img/net.svg' },
      { title: 'Node.js', icon: 'assets/img/node.svg' },
      { title: 'Rails', icon: 'assets/img/rails.svg' },
      { title: 'Python', icon: 'assets/img/python.svg' },
    ],
  },
  {
    id: 'cms',
    title: 'CMS',
    items: [
      { title: 'Drupal', icon: 'assets/img/drupal.svg' },
      { title: 'Joomla', icon: 'assets/img/joomla.svg' },
      { title: 'WordPress', icon: 'assets/img/wordpress.svg' },
      { title: 'Magento', icon: 'assets/img/magento.svg' },
      { title: 'Shopify', icon: 'assets/img/shopify.svg' },
    ],
  },
  {
    id: 'infra-devops',
    title: 'Infra and DevOps',
    items: [
      { title: 'AWS', icon: 'assets/img/aws.svg' },
      { title: 'Google Cloud', icon: 'assets/img/googlecloud.svg' },
      { title: 'Gradle', icon: 'assets/img/gradle.svg' },
      { title: 'Jenkins', icon: 'assets/img/jenkins.svg' },
      { title: 'Appium', icon: 'assets/img/appium.svg' },
      { title: 'Selenium', icon: 'assets/img/selenium.svg' },
    ],
  },
]

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState<string>('ai-tech')

  const activeCategory = tabCategories.find((item) => item.id === activeTab) || tabCategories[0]

  return (
    <section id="services" className="services section">

      <div className="container">
        <div className='section-title'>
          <h2>Our Services</h2>
        </div>
        <div className="mb-4 text-center">
          <div className="btn-group" role="group" aria-label="Service category tabs">
            {tabCategories.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`btn btn-outline-primary ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.title}
              </button>
            ))}
          </div>
        </div>

        <div className='service-tab-section'>
          <div className="row gy-4 text-center justify-content-center align-items-center">
            {activeCategory.items.map((logo, index) => (
              <div key={`${activeCategory.id}-${index}`} className="col-6 col-sm-4 col-md-3 col-lg-2">
                <div className="service-logo py-3 px-2 h-100 d-flex flex-column align-items-center justify-content-center">
                  <img src={logo.icon} alt={logo.title} className="img-fluid tech-icon" />
                  <span className="mt-4 pt-2 font-15 fw-semibold">{logo.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
