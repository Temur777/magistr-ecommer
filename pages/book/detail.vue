<template>
  <v-app>
    <v-container fluid>
     <v-row class="mt-12">
       <v-col cols="10" offset="1" class="mt-12">
         <v-row>
           <v-col cols="8" class="detail-text">
             <p style="text-align: justify">
               Children's literature or juvenile literature includes stories, books, magazines, and poems that are created for children. Modern children's literature is classified in two different ways: genre or the intended age of the reader.

               Children's literature can be traced to traditional stories like fairy tales, that have only been identified as children's literature in the eighteenth century, and songs, part of a wider oral tradition, that adults shared with children before publishing existed. The development of early children's literature, before printing was invented, is difficult to trace. Even after printing became widespread, many classic "children's" tales were originally created for adults and later adapted for a younger audience. Since the fifteenth century much literature has been aimed specifically at children, often with a moral or religious message. Children's literature has been shaped by religious sources, like Puritan traditions, or by more philosophical and scientific standpoints with the influences of Charles Darwin and John Locke. The late nineteenth and early twentieth centuries are known as the "Golden Age of Children's Literature" because many classic children's books were published then.
             </p>
           </v-col>
           <v-col cols="4">
             <div class="detail-img">
             </div>
           </v-col>
         </v-row>
       </v-col>
     </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'bookDetail',
}
</script>
<style lang="scss" scoped>
.detail-text{
  background-image: url("./assets/images/Ellipse 14.svg");
  background-size: cover;
  background-position: center center;
}
.detail-text p{
  padding: 15px 20px;
}
.detail-img{
  width: 70%;
  height: 300px;
  margin: 0 auto;
  background-image: url("./assets/images/photo_5770799908553599887_w 1.png");
  background-position: center center;
  background-size: contain;
  border-radius: 10px;
  border: 3px solid #00b2a9;
  background-color: rgba(207, 218, 218, 0.59);
}
</style>
