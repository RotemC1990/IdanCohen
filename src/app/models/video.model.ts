export class Video {
    path = "";
    posterPath="";
    name="";
    description="";
    frontReel=true;
    category="";
    
    constructor(path:string, posterPath:string, name: string, desc:string, category:string, frontReelVideo:boolean) {
      if(path==undefined || path ==null) {
        this.path = "../../assets/videos/FrontReel2.mp4";
        this.posterPath="";
        this.name = "";
        this.description = "";
        this.frontReel = frontReelVideo;
        this.category = category;
      }
      else {
        this.path = path;
        this.posterPath=posterPath;
        this.name = name;
        this.description = desc;
        this.frontReel=frontReelVideo;
        this.category = category;
      }
     
     }
    }