import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { LoadingController, NavParams } from '@ionic/angular';
import { BlogPostInterface } from 'src/model/BlogPost';

@Component({
  selector: 'app-bloc-post-detail',
  templateUrl: './bloc-post-detail.page.html',
  styleUrls: ['./bloc-post-detail.page.scss'],
})
export class BlocPostDetailPage implements OnInit {

  
  item: BlogPostInterface;
  // loading: Loading;
  trustedVideoUrl: SafeResourceUrl;
  title: string = '';
  loading: Promise<HTMLIonLoadingElement>;


  constructor(  private domSanitizer: DomSanitizer,public navParams: NavParams,
    private loadingCtrl: LoadingController) {
      if (this.navParams.data != undefined) {
        this.item = this.navParams.data;
        this.title = this.item.title.substring(0, 25);
      }
     }

  ngOnInit() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BlocPostDetailsPage');
  }

  async ionViewWillEnter(): Promise<void> {
    if (this.item.videoURL) {
      this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.item.videoURL);
      this.loading = this.loadingCtrl.create({
        // content: 'Veillez patienter...'
      });
      (await this.loading).present();
    }

  }

  async handleIFrameLoadEvent() {
    (await this.loading).dismiss();
  }

}
