export class Video {
    downloadURL = "";
    posterDownloadURL="";
    title="";
    description="";
    frontReel=true;
    category="";
    credits="";
    
    constructor(downloadURL:string, posterDownloadURL:string, title: string, desc:string, category:string, credits : string, frontReelVideo:boolean) {
      if(downloadURL ==undefined || downloadURL ==null) {
        this.downloadURL = "../../assets/videos/FrontReel2.mp4";
        this.posterDownloadURL="";
        this.title = "";
        this.description = "";
        this.frontReel = frontReelVideo;
        this.category = category;
        this.credits="";
      }
      else {
        this.downloadURL = downloadURL;
        this.posterDownloadURL=posterDownloadURL;
        this.title = title;
        this.description = desc;
        this.frontReel=frontReelVideo;
        this.category = category;
        this.credits = credits;
      }
     
     }
    }