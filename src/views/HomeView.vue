<template>
  <div>
    <section id="home" class="home-section">
    <v-parallax
      dark
      src="https://i.pinimg.com/736x/b2/aa/20/b2aa20a6bdc0fe406979739085f57aba.jpg"
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          class="text-center"
          cols="12"
        >
          <h1 class="text-h4 font-weight-thin mb-4">
            Welcome To My Introduce Website
          </h1>
        </v-col>
      </v-row>
    </v-parallax>
    </section>

    <section id="about" class="about-section">
      <v-container>
        <h1>ผมคือใคร?</h1>
        <v-row justify="center" align="center">
          <v-col
            cols="12"
            md="4"
            class="text-center"
          >
            <v-img
              width="250"
              height="250"
              class="mx-auto rounded-circle mt-12"
              src="https://www.finearts.cmu.ac.th/wp-content/uploads/2021/07/blank-profile-picture-973460_1280-1.png"
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
                จุดแข็ง
              </v-card-title>

              <v-card-text>
                <ol>
                  <li>มีความรับผิดชอบ</li>
                  <li>เป็นคนใจเย็น</li>
                  <li>ทำงานเป็นทีม</li>
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
      <div>
        <v-img
          width="250"
          rounded="xl"
          src="https://www.finearts.cmu.ac.th/wp-content/uploads/2021/07/blank-profile-picture-973460_1280-1.png">
        </v-img>
        <h1>จบจากที่ไหน?</h1>
        <span>
          จบจากคณะเทคโนโลยีสารสนเทศและการสื่อสาร สาขาวิศวกรรมซอฟต์แวร์ มหาวิทยาลัยพะเยา
          โดยเริ่มศึกษาตั้งแต่ พ.ศ.2565 ถึง พ.ศ.2568
        </span>
      </div>
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
        { title: 'วาดรูป', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
        { title: 'แก้โจทย์ Logic', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
        { title: 'ถ่ายรูป', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
      ],
    }),
  }
</script>

<style scoped>
.home-section {
  min-height: 80vh;
}
.profile-img {
  margin-top: 50px;
}
.about-section {
  background-image: url('https://img.magnific.com/free-photo/abstract-gradient-background-with-grain-texture_84443-2838.jpg?semt=ais_hybrid&w=740&q=80');
  background-size: cover;
  background-position: center;
  color: white;
  min-height: 90vh;
}
.education-section {
  background-image: url('https://img.magnific.com/free-photo/abstract-gradient-background-with-grain-texture_84443-2838.jpg?semt=ais_hybrid&w=740&q=80');
  background-size: cover;
  background-position: center;
  color: white;
  min-height: 90vh;
}
.habit-section {
  background-image: url('https://img.magnific.com/free-photo/abstract-gradient-background-with-grain-texture_84443-2838.jpg?semt=ais_hybrid&w=740&q=80');
  background-size: cover;
  background-position: center;
  color: white;
  min-height: 90vh;
}
</style>
