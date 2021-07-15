import { Component, ElementRef, OnInit } from '@angular/core';
// import { WebrtcService } from '../providers/webrtc.service';

@Component({
  selector: 'app-video-call',
  templateUrl: './video-call.page.html',
  styleUrls: ['./video-call.page.scss'],
})
export class VideoCallPage implements OnInit {

  // topVideoFrame = 'partner-video';
  // userId: string;
  // partnerId: string;
  // myEl: HTMLMediaElement;
  // partnerEl: HTMLMediaElement;

  constructor(
    // public webRTC: WebrtcService,
    // public elRef: ElementRef
  ) {}

  ngOnInit() {
  }

  // init() {
  //   this.myEl = this.elRef.nativeElement.querySelector('#my-video');
  //   this.partnerEl = this.elRef.nativeElement.querySelector('#partner-video');
  //   this.webRTC.init(this.userId, this.myEl, this.partnerEl);
  // }

  // call() {
  //   this.webRTC.call(this.partnerId);
  //   this.swapVideo('my-video');
  // }

  // swapVideo(topVideo: string) {
  //   this.topVideoFrame = topVideo;
  // }

}
