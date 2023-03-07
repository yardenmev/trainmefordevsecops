pipeline {
    agent {
  label 'docker'
}

    stages {
        stage('Git Clone') {
            steps {
                    checkout scmGit(branches: [[name: 'email-notification']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/yardenmev/trainmefordevsecops.git']])

                }
        }
        stage('SAST') {
            steps {
                   
                }
            }
        stage('Build and Tag ') {
            steps {
                script {
                     app = docker.build("yardenmev/snake:${env.BUILD_ID}")
                }
                }
        }
        stage('Image and Vulnerabilty Scan ') {
            steps {
                     sh 'echo "hello'
                }
        }
        stage('Post to Docker Hub  ') {
            steps {
                script {
                docker.withRegistry('https://registry.hub.docker.com','dockerhub') {
                    app.push("${env.BUILD_ID}")
                    }
                }
                }
        }
        stage('Pull image Server  ') {
            steps {
                     sh 'docker-compose down'
                     sh 'docker-compose up'
                
                }
        }
        stage('DAAST  ') {
            steps {
                    
                }
        }
    }
}
