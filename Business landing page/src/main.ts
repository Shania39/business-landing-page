import './style.css'

interface NavItem {
  label: string
  href: string
}

interface ServiceCard {
  id: number
  icon: string
  title: string
  description: string
}

class LandingPage {
  private navItems: NavItem[] = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Service', href: '#service' },
    { label: 'Experts', href: '#experts' },
    { label: 'Blog', href: '#blog' }
  ]

  private services: ServiceCard[] = [
    {
      id: 1,
      icon: 'bi-device-ssd',
      title: 'Custom Software Development',
      description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry\'s standard dummy text over 1000s.'
    },
    {
      id: 2,
      icon: 'bi-palette',
      title: 'Web Development and Design',
      description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry\'s standard dummy text over 1000s.'
    },
    {
      id: 3,
      icon: 'bi-graph-up',
      title: 'Data Analytics and Business Intelligence',
      description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry\'s standard dummy text over 1000s.'
    }
  ]

  constructor() {
    this.render()
    this.initializeEventListeners()
  }

  private render(): void {
    const appContainer = document.querySelector<HTMLDivElement>('#app')
    if (!appContainer) return

    appContainer.innerHTML = `
      <!-- Navigation -->
      <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-top">
        <div class="container-fluid">
          <div class="navbar-brand fw-bold d-flex align-items-center gap-2">
            <i class="bi bi-shield-check text-primary" style="font-size: 1.5rem;"></i>
            <div>
              <small class="text-muted d-block">VR Thans</small>
              <strong>BUSINESS</strong>
            </div>
          </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto gap-3">
              ${this.navItems.map(item => `
                <li class="nav-item">
                  <a class="nav-link" href="${item.href}">${item.label}</a>
                </li>
              `).join('')}
            </ul>
            <button class="btn btn-primary ms-3 rounded-pill">
              <i class="bi bi-person-circle"></i>
            </button>
          </div>
        </div>
      </nav>

      <!-- Hero Section -->
      <section id="home" class="py-5 bg-gradient" style="background: linear-gradient(135deg, #e8f0f8 0%, #f5f9fc 100%);">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 mb-4 mb-lg-0">
              <small class="text-primary fw-bold">Optimize IT Systems</small>
              <h1 class="display-4 fw-bold my-3">Seamless IT For Your Business Boosting Your Growth</h1>
              <p class="text-muted lead">Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text over 1000s.</p>
              <div class="d-flex gap-3 mt-4">
                <button class="btn btn-dark btn-lg fw-bold">Get Started</button>
                <button class="btn btn-outline-primary btn-lg rounded-circle d-flex align-items-center justify-content-center" style="width: 50px; height: 50px;">
                  <i class="bi bi-play-fill"></i>
                </button>
                <span class="d-flex align-items-center text-muted">How We Work</span>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="position-relative hero-image-container">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80" alt="Business Meeting" class="img-fluid rounded-3" style="width: 100%; height: auto; object-fit: cover;">
                
                <!-- Service Stats -->
                <div class="position-absolute stat-box" style="top: 20px; right: 20px; background: white; padding: 15px 25px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                  <small class="text-muted d-block">Our Services</small>
                  <strong class="text-dark">123+</strong>
                  <small class="text-muted d-block">Active Client</small>
                </div>
                <div class="position-absolute stat-box" style="bottom: 20px; right: 20px; background: white; padding: 15px 25px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                  <small class="text-muted d-block">Expert</small>
                  <strong class="text-dark">69+</strong>
                  <small class="text-muted d-block">Skill Expert</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Services Section -->
      <section id="service" class="py-5">
        <div class="container">
          <div class="text-center mb-5">
            <small class="text-primary fw-bold">Our Service</small>
            <h2 class="display-5 fw-bold">We Serve the Best Work</h2>
          </div>
          <div class="row g-4">
            ${this.services.map(service => `
              <div class="col-lg-4">
                <div class="card h-100 border-0 shadow-sm service-card" data-service-id="${service.id}">
                  <div class="card-body p-4">
                    <div class="mb-3">
                      <div class="d-inline-flex align-items-center justify-content-center" style="width: 60px; height: 60px; background: #f0f7ff; border-radius: 10px;">
                        <i class="bi ${service.icon} text-primary" style="font-size: 1.8rem;"></i>
                      </div>
                    </div>
                    <h5 class="card-title fw-bold">${service.title}</h5>
                    <p class="card-text text-muted text-small">${service.description}</p>
                    <a href="#" class="btn btn-primary btn-sm">Explore More</a>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="bg-dark text-white py-4 mt-5">
        <div class="container text-center">
          <p class="mb-0">&copy; 2024 VR Thans Business. All rights reserved.</p>
        </div>
      </footer>
    `
  }

  private initializeEventListeners(): void {
    const serviceCards = document.querySelectorAll('.service-card')
    serviceCards.forEach(card => {
      card.addEventListener('mouseenter', function () {
        this.classList.add('shadow-lg')
      })
      card.addEventListener('mouseleave', function () {
        this.classList.remove('shadow-lg')
      })
    })
  }
}

// Initialize the landing page when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new LandingPage()
})
