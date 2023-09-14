import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
 template: `


      <div class="box overflow-hidden">
        <div class="box__left box__left--bg"></div>
        <div class="box__center box__center--bg">
          <div class="text-end  pt-4">
            <span class="fz-20 ff-prompt pe-5">09/09/2023 9:00:35 (UTC+7)</span>
          </div>
          <div class="row align-items-end ">
            <div class="col-3 offset-0  text-center">
              <img class="ww-89" src="assets/images/logo-ausiris.svg" alt="">
            </div>
            <div class="col-8 ">
              <div >
                <div class="row fz-36 ff-prompt" style="background: linear-gradient(90deg, rgba(255, 255, 255, 0.00) 5%, #7490B7 55%, rgba(116, 144, 183, 0.00) 95%);">
                  <div class="col-6  d-flex gap-3 justify-content-center align-items-center">
                    <img src="assets/images/global.svg" class="ww-40" alt="">
                    <span class="">Silver  USD/Oz</span>
                  </div>
                  <div class="col-2  d-flex align-items-center fz-"><span>23.02</span></div>
                  <div class="col-2  d-flex align-items-center fz-"><span>23.02</span></div>
                  <div class="col-2  d-flex align-items-center fz-"><span>USD</span></div>
                </div>
              </div>
            </div>

            <!--  -->
            <div class="">
              <div class="row py-4">
                <div class="col-3 "></div>
                <div class="col-8 ">
                  <div class="row">
                    <div class="col-6  text-center fz-48 ff-noto">ราคารับซื้อ</div>
                    <div class="col-6  text-center fz-48 ff-noto">ราคาขายออก</div>
                  </div>
                </div>
              </div>
              <div class="row py-3">
                <div class="col-3 ">
                  <div class="row  -danger h-100 align-items-center">
                    <div class="col-6  text-end">
                      <img class="ww-116" src="assets/images/logo-silver-99-kg.svg" alt="">
                    </div>
                    <div class="col-6 ">
                      <p class="m-0 fz-50 ff-prompt">Silver</p>
                      <p class="m-0 fz-50 ff-prompt">99.99%</p>
                      <p class="m-0 fz-30 ff-prompt">ราคา/กิโลกรัม</p>
                    </div>
                  </div>
                </div>
                <div class="col-8 ">
                  <div class="card">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-6  text-center fz-140 fc-sky">25,145</div>
                        <div class="col-6  text-center fz-140 fc-blue">25,545</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-1 d-flex align-items-center ">
                  <span class="fz-48 ff-prompt">บาท</span>
                </div>
              </div>
              <div class="row py-3">
                <div class="col-3">
                  <div class="row  -danger h-100 align-items-center">
                    <div class="col-6  text-end">
                      <img class="ww-116" src="assets/images/logo-silver-99-bg.svg" alt="">
                    </div>
                    <div class="col-6 ">
                      <p class="m-0 fz-50 ff-prompt">Silver</p>
                      <p class="m-0 fz-50 ff-prompt">99.99%</p>
                      <p class="m-0 fz-30 ff-prompt">ราคา/บาท</p>
                    </div>
                  </div>
                </div>
                <div class="col-8 py-3">
                  <div class="card">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-6  text-center fz-140 fc-sky">25,145</div>
                        <div class="col-6  text-center fz-140 fc-blue">25,545</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-1 d-flex align-items-center ">
                  <span class="fz-48 ff-prompt">บาท</span>
                </div>
              </div>
            </div>

            <!-- <div class="row">
              <div class="col-12 text-center fz-24 ff-noto"> </div>
            </div> -->
            <p class="m-0 fz-24 ff-noto credit">© 2022 Ausiris. All rights reserved.</p>
            <!--  -->
          </div>
        </div>
        <div class="box__right box__right--bg"></div>
      </div>





 `,
  styles: [
    `
        .card {
          -radius: 20px;
          background: linear-gradient(180deg, #D2E4FF 0%, #F8FBFF 100%);
          box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.25), 0px 10px 5px 0px rgba(146, 167, 241, 0.57) inset;
          height: 220px;
        }
      
        .box {
          display: grid;
          grid-template-columns: auto 1fr auto;
          grid-template-rows: auto;

          width: 100%; 
          height: 100%;

          &__left {
            width: 30px;

            &--bg {
              background: rgb(163,163,163);
              background: linear-gradient(180deg, rgba(163,163,163,1) 0%, rgba(255,246,246,1) 30%, rgba(128,128,128,1) 100%);

              fill: linear-gradient(270deg, #A3A3A3 9.06%, #FFF6F6 71.47%, #808080 97.82%);
              filter: drop-shadow(30px 0px 30px rgba(0, 0, 0, 0.20));
            }
          }
          &__center {
            width: 100%;

            &--bg {
              background: linear-gradient(180deg, #002458 2.6%, #163A6D 57.81%, #305A97 100%);
            }
          }
          &__right {
            width: 30px;


            &--bg {
              background: rgb(163,163,163);
              background: linear-gradient(0deg, rgba(163,163,163,1) 0%, rgba(255,249,249,1) 30%, rgba(128,128,128,1) 100%);

              fill: linear-gradient(270deg, #A3A3A3 9.06%, #FFF9F9 33.1%, #808080 97.82%);
              filter: drop-shadow(-20px 0px 30px rgba(0, 0, 0, 0.20));
            }
          }
        }


        .credit {
          position: absolute;
          top: 93%;
          left: 42%;
        }

    
    `
  ]
})
export class AppComponent {}
