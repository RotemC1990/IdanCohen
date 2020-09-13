export class Video {
    videoPath = "";
    posterPath="";
    videoName="";
    videoDesc="";
    frontReel=true;
    
    constructor(Vpath:string,pPath:string, name: string,desc:string,frontReelVideo:boolean) {
      if(Vpath==undefined || Vpath ==null) {
        this.videoPath = "../../assets/videos/FrontReel2.mp4";
        this.posterPath="";
        this.videoName = "";
        this.videoDesc = "";
        this.frontReel=frontReelVideo;
      }
      else {
        this.videoPath = Vpath;
        this.posterPath=pPath;
        this.videoName = name;
        this.videoDesc = desc;
        this.frontReel=frontReelVideo;
      }
     
     }
    }