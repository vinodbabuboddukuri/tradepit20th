pipeline {
  agent any

  stages {
    stage('Build') {
      steps {
        sh 'docker build -t myapp .'
      }
    }

    stage('Deploy') {
      steps {
        sh 'docker run -d --name myapp -p 80:80 -p 443:443 myapp'
      }
    }
  }

  post {
    always {
      sh 'docker stop myapp && docker rm myapp'
    }
  }
}
