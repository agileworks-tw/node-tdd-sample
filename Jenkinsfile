node {
  try{
    slackSend channel: '#hellojs-2016', message: "started ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)", teamDomain: 'agileworks-tw', token: 'JhXFKEl6cBFoQ4v52BEJw9Mr'
    stage 'checkout project'
    git url: 'https://github.com/agileworks-tw/node-tdd-sample.git'

    stage 'build'
    sh 'npm i'


    stage 'test'
    sh 'npm run test'

    slackSend channel: '#hellojs-2016', color: 'good', message: "success ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)", teamDomain: 'agileworks-tw', token: 'JhXFKEl6cBFoQ4v52BEJw9Mr'
  }catch(e){
    slackSend channel: '#hellojs-2016', color: 'danger', message: "fail ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)", teamDomain: 'agileworks-tw', token: 'JhXFKEl6cBFoQ4v52BEJw9Mr'
    throw e;
  }
}
