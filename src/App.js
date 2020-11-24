import './App.css';
import profile from './profile.jpeg';
import logo_c from './clang.png';
import logo_cpp from './cpp.png';
import logo_html from './html.png';
import logo_css from './css.png';
import logo_js from './js.png';
import logo_react from './react.png';
import { Button, Card, Container, Row, Col, Tabs, Tab } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fab)
library.add(far)
library.add(fas)

function App() {
  return (
    <div className="App" style={{backgroundColor: '#30475e', width: '100%'}}>
      <Container style={{color: 'white', textAlign: 'left'}}>
        <Row>
          <Col>
            <img src={profile} style={{width: '100%', borderRadius: '5px', border: '3px solid white'}}/>
          </Col>
          <Col md = {10}>
            <div style={{ padding: '25px 0 0 20px'}}>
              <article>
                <h3>Rafif Wahyu Hidayat</h3>
                <p>
                    Saya adalah seorang Web Developer pemula yang masih banyak membutuhkan pelajaran seputar web developing.
                    Ini adalah web pribadi saya yang akan berisikan progres-progres dan perjalanan saya selama melakukan web developing.
                </p>
              </article>
            </div>
            </Col>
        </Row>
        <hr  style={{
        color: '#e8e8e8',
        backgroundColor: '#e8e8e8',
        height: .5,
        borderColor : '#e8e8e8'
        }}/>
      </Container>
      <Container style={{color: 'white', textAlign: 'left'}}>
        <h2>Mengenai Saya</h2>
        <Tabs defaultActiveKey="data" id="noanim-tab-example">
          <Tab eventKey="data" title="Biografi">
            <Container style={{color: 'white', textAlign: 'left'}}>
              <article>
                <p>
                  Nama lengkap saya adalah Rafif Wahyu Hidayat, saya lahir di Tangerang, 19 Desember 2001.
                  Saya suka berolahraga seperti Badminton dan Futsal, saya senang belajar bahasa pemrograman.
                  Saya suka belajar seputar komputer. Saya juga suka bermain game online, banyak game yang sudah saya coba dan saya mainkan dengan waktu yang cukup lama.
                </p>
              </article>
            </Container>
          </Tab>
          <Tab eventKey="jenjang" title="Jenjang Pendidikan">
            <article>
              <h3><FontAwesomeIcon icon={['fas', 'school']} />Sekolah Dasar</h3>
              <h4>
                 SDN Karawaci Baru 1 (Lulus pada tahun ajaran 2012/2013)
              </h4>

              <h3><FontAwesomeIcon icon={['fas', 'book-reader']} />Sekolah Menengah Pertama</h3>
              <h4>
                SMP Negeri 9 Tangerang (Lulus pada tahun ajaran 2015/2016)
              </h4>
          
              <h3><FontAwesomeIcon icon={['fas','graduation-cap']} />Sekolah Menengah Atas</h3>
              <h4>
                SMA Negeri 5 Tangerang - Jurusan IPA (Lulus pada tahun ajaran 2018/2019)
              </h4>              
              <h3><FontAwesomeIcon icon={['fas','university']} />Kuliah</h3>
              <h4>
                Universitas Multimedia Nusantara - Teknik Informatika (Sekarang)
              </h4>
            </article>
          </Tab>
        </Tabs>
        <hr  style={{
        color: '#e8e8e8',
        backgroundColor: '#e8e8e8',
        height: .5,
        borderColor : '#e8e8e8'
        }}/>
      </Container>
      <Container style={{color: 'white'}}>
        <h3>Skills</h3>
        <hr  style={{
        color: '#e8e8e8',
        backgroundColor: '#e8e8e8',
        height: .5,
        borderColor : '#e8e8e8'
        }}/>
        <Row style={{paddingBottom: '10px'}}>
          <Col md = {4}>
            <Card style={{ width: '100%', backgroundColor: '#120078' }}>
              <Card.Img variant="top" src={logo_c} />
              <Card.Body>
                <Card.Title>C Language</Card.Title>
                  <Card.Text>
                    <FontAwesomeIcon icon ={['fas', 'star']} />
                    <FontAwesomeIcon icon ={['fas', 'star']} />
                    <FontAwesomeIcon icon ={['fas', 'star']} />
                    <FontAwesomeIcon icon ={['fas', 'star']} />
                    <FontAwesomeIcon icon ={['far', 'star']} />
                  </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md = {4}> 
          <Card style={{ width: '100%', backgroundColor: '#120078' }}>
              <Card.Img variant="top" src={logo_cpp} style={{width: '100%',  height: '100%'}}/>
              <Card.Body>
                <Card.Title>C++ Language</Card.Title>
                  <Card.Text>
                    <FontAwesomeIcon icon ={['fas', 'star']} />
                    <FontAwesomeIcon icon ={['fas', 'star']} />
                    <FontAwesomeIcon icon ={['fas', 'star']} />
                    <FontAwesomeIcon icon ={['far', 'star']} />
                    <FontAwesomeIcon icon ={['far', 'star']} />
                  </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md = {4}>
          <Card style={{ width: '100%', backgroundColor: '#120078' }}>
              <Card.Img variant="top" src={logo_html} style={{width: '100%', height: '100%'}}/>
              <Card.Body>
                <Card.Title>HTML Language</Card.Title>
                  <Card.Text>
                    <FontAwesomeIcon icon ={['fas', 'star']} />
                    <FontAwesomeIcon icon ={['fas', 'star']} />
                    <FontAwesomeIcon icon ={['fas', 'star']} />
                    <FontAwesomeIcon icon ={['far', 'star']} />
                    <FontAwesomeIcon icon ={['far', 'star']} />
                  </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row style={{paddingBottom: '10px'}}>
        <Col md = {4}>
            <Card style={{ width: '100%', backgroundColor: '#120078' }}>
              <Card.Img variant="top" src={logo_css} />
              <Card.Body>
                <Card.Title>CSS</Card.Title>
                  <Card.Text>
                    <FontAwesomeIcon icon ={['fas', 'star']} />
                    <FontAwesomeIcon icon ={['fas', 'star']} />
                    <FontAwesomeIcon icon ={['fas', 'star']} />
                    <FontAwesomeIcon icon ={['far', 'star']} />
                    <FontAwesomeIcon icon ={['far', 'star']} />
                  </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md = {4}> 
          <Card style={{ width: '100%', backgroundColor: '#120078' }}>
              <Card.Img variant="top" src={logo_js} style={{width: '100%',  height: '100%'}}/>
              <Card.Body>
                <Card.Title>JavaScript</Card.Title>
                  <Card.Text>
                    <FontAwesomeIcon icon ={['fas', 'star']} />
                    <FontAwesomeIcon icon ={['fas', 'star']} />
                    <FontAwesomeIcon icon ={['far', 'star']} />
                    <FontAwesomeIcon icon ={['far', 'star']} />
                    <FontAwesomeIcon icon ={['far', 'star']} />
                  </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md = {4}>
          <Card style={{ width: '100%', backgroundColor: '#120078' }}>
              <Card.Img variant="top" src={logo_react} style={{width: '100%', height: '100%'}}/>
              <Card.Body>
                <Card.Title>React</Card.Title>
                  <Card.Text>
                    <FontAwesomeIcon icon ={['fas', 'star']} />
                    <FontAwesomeIcon icon ={['fas', 'star']} />
                    <FontAwesomeIcon icon ={['far', 'star']} />
                    <FontAwesomeIcon icon ={['far', 'star']} />
                    <FontAwesomeIcon icon ={['far', 'star']} />
                  </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container style={{color: 'white', textAlign: 'left'}}>
        <hr  style={{
          color: '#e8e8e8',
          backgroundColor: '#e8e8e8',
          height: .5,
          borderColor : '#e8e8e8'
        }}/>
        <h3>Kontak Saya</h3>
        <p>
          Masuk ke halaman saya:
        </p>
        <Button style={{backgroundColor: '#30475e', border: 'none'}} size="lg" onClick={(e) => {
            e.preventDefault()
            window.open('https://github.com/rafifwhy')
          }}><FontAwesomeIcon icon={['fab','github']} />
        </Button>
        <Button  style={{backgroundColor: '#30475e', border: 'none'}} size="lg" onClick={(e) => {
            e.preventDefault()
            window.open('https://instagram.com/rafifwahyuh')
          }}><FontAwesomeIcon icon={['fab','instagram']} />
        </Button>
        <Button style={{backgroundColor: '#30475e', border: 'none'}} size="lg" onClick={(e) => {
            e.preventDefault()
            window.open('https://facebook.com/rapipwahyu')
          }}><FontAwesomeIcon icon={['fab','facebook']} />
        </Button>
      </Container>
    </div>
  );
}

export default App;