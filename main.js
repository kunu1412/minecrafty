var player=""
var block=""
var height_block=30
var width_block=30
var playerx=10
var playery=10

 canvas= new fabric.Canvas("myCanvas")
 function player_update(){
    fabric.Image.fromURL("player.png",function(img){
        player=img
        player.scaleToWidth(100)
        player.scaleToHeight(150)


        player.set({
            top:playery,left:playerx
        })
        canvas.add(player)

    })
}
player_update()