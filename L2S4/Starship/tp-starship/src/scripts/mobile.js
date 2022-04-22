
export default class Mobile{
    constructor(x,y,deltaX=0,deltaY=0,img){
        this.x=x;
        this.y=y;
        this.deltaX=deltaX;
        this.deltaY=deltaY;
        this.image=this.createImage(img);
        this.height=this.image.src.length;
    }
    /**
     * give the position x of the mobile
     */
    get _x (){
        return this.x;
    }

    /**
     * give the position y of the mobile
     */
    get _y (){
        return this.y;
    }

    /**
     * Draws canvas with x in width and y in height
     * @param {*} context 
     */
    draw(context){
        context.drawImage(this.image,this.x,this.y);
    }

    /**
     * change the location of the draw 
     */
    move(){
        this.x += this.deltaX;
        this.y += this.deltaY;
    }

    /**
     * 
     * @param {Image} source 
     * @returns the Image 
     */
    createImage(source) {
        const mobileImg = new Image();
        mobileImg.src = source;
        return mobileImg;
    }
}