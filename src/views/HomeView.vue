<template>
  <div>
    <section id="home" class="home-section">
      <v-row
        align="center"
        justify="center"
        class="fill-height"
      >
        <v-col
          class="text-center"
          cols="5"
        >
          <h1 class="text-h4 font-weight-thin mb-4">
            สวัสดี เรามาทำความรู้จักกันเถอะ
          </h1>
        </v-col>
      </v-row>
    </section>

    <section id="about" class="about-section">
      <v-container>
        <h1>ผมชื่ออะไร?</h1>
        <v-row justify="center" align="center">
          <v-col
            cols="5"
            md="4"
            class="text-center"
          >
            <v-img
              width="250"
              height="250"
              class="mx-auto rounded-circle mt-12"
              src="../assets/download.jpg"
            ></v-img>
          </v-col>
          <v-col
            cols="12"
            md="4"
          >
            <v-card
              height="100%"
              elevation="4"
            >
              <v-card-title>
                ข้อมูลเบื้องต้น
              </v-card-title>

              <v-card-text>
                <h3>ชื่อจริง: สุธี จันทร์ขาว</h3>
                <h3>ชื่อเล่น: มาร์ค</h3>
                <h3>อายุ: 22 ปี</h3>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col
            cols="12"
            md="4"
          >
            <v-card
              height="100%"
              elevation="4"
            >
              <v-card-title>
                สิ่งที่สนใจ
              </v-card-title>
              <v-card-text>
                <h3>Video Game</h3>
                <h3>Japanese Culture</h3>
              </v-card-text>
            </v-card>
          </v-col>


          <v-col
            cols="12"
            md="4"
          >
            <v-card
              height="100%"
              elevation="4"
            >
              <v-card-title>
                จุดแข็ง
              </v-card-title>

              <v-card-text>
                <ol>
                  <li>มีความรับผิดชอบ</li>
                  <li>เป็นคนใจเย็น</li>
                  <li>แก้ไขปัญหาได้ดี</li>
                </ol>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col
            cols="12"
            md="4"
          >
            <v-card
              height="100%"
              elevation="4"
            >
              <v-card-title>
                จุดอ่อน
              </v-card-title>

              <v-card-text>
                <ol>
                  <li>เป็นคนขี้กังวล</li>
                  <li>บางครั้งใช้เวลาคิดนาน</li>
                  <li>ขาดความมั่นใจในตัวเอง</li>
                </ol>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section id="education" class="education-section">
      <v-container>
        <h1 class="text-center mb-6">
          จบจากที่ไหน?
        </h1>

        <v-card
          max-width="800"
          class="mx-auto pa-6"
          elevation="4"
        >
          <v-card-title>
            มหาวิทยาลัยพะเยา
          </v-card-title>

          <v-card-text>
            <p>
              จบจากคณะเทคโนโลยีสารสนเทศและการสื่อสาร
              สาขาวิศวกรรมซอฟต์แวร์
              มหาวิทยาลัยพะเยา
            </p>

            <p>
              โดยเริ่มศึกษาตั้งแต่ พ.ศ. 2565 ถึง พ.ศ. 2568
            </p>
          </v-card-text>
        </v-card>
      </v-container>
    </section>

    <section id="habit" class="habit-section">
      <div>
        <h1>เวลาว่างชอบทำอะไรบ้าง?</h1>
        <v-container fluid>
        <v-row justify="center" align="center">
          <v-col
            v-for="card in cards"
            :key="card.title"
            cols="4"
            md="4"
            class="text-center"
          >
            <v-card width="300">
              <v-img
                :src="card.src"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="400px"
              >
              <v-card-title>
                {{ card.title }}
              </v-card-title>
              </v-img>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data: () => ({
      cards: [
        { title: 'วาดรูป', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8ue-8XvICu_0bsNbIC1GFXXgykqz8n-7AXHGrUWe3181iPB6tgmdQ3VI&s=10' },
        { title: 'แก้โจทย์ Logic', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxUD-_UTuEmC2ib9POh2ZuAVjtTAIPDEV6fesdt1X-_k-UNT642E81RXlC&s=10'},
        { title: 'ถ่ายรูป', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbW1ZGQdic-O-fTeFFl-83cIi3eTx7FbJqAi6agYiPNd77Gg8w54mPx1G_&s=10'},
      ],
    }),
  }
</script>

<style scoped>
section {
  min-height: 100vh;
  padding: 80px 40px;
}
.profile-img {
  margin-top: 50px;
}
.home-section {
  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9PXtejZflIP_n-amdMUJBn5xvPaLlEl3t1VsHzE4I7b7pfTiWwlUBjoIw&s=10');
  background-size: cover;
  background-position: center;
  color: white;
  min-height: 100vh;
}
.about-section {
  background-image: url('https://img.magnific.com/free-photo/abstract-gradient-background-with-grain-texture_84443-2838.jpg?semt=ais_hybrid&w=740&q=80');
  background-size: cover;
  background-position: center;
  color: white;
  min-height: 100vh;
}
.education-section {
  background-image: url('https://f.ptcdn.info/091/052/000/os6u74lb7FjIiVg98he-o.jpg');
  background-size: cover;
  color: black;
  min-height: 100vh;
}
.habit-section {
  background-image: url('https://img.magnific.com/free-photo/abstract-gradient-background-with-grain-texture_84443-2838.jpg?semt=ais_hybrid&w=740&q=80');
  background-size: cover;
  background-position: center;
  color: white;
  min-height: 100vh;
}
.margin-section {
  margin-top: 50px;
}
</style>
