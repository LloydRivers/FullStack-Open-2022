import java.util.ArrayList;

class Playlist {
  
  public static void main(String[] args) {
    ArrayList<String> desertIslandPlaylist = new ArrayList<String>();

    desertIslandPlaylist.add("Song 1");
    desertIslandPlaylist.add("Song 2");
    desertIslandPlaylist.add("Song 3");
    desertIslandPlaylist.add("Song 4");
    desertIslandPlaylist.add("Song 5");
    desertIslandPlaylist.add("Song 6");


    System.out.println(desertIslandPlaylist);

    System.out.println(desertIslandPlaylist.size());

    desertIslandPlaylist.remove("Song 6");

    System.out.println(desertIslandPlaylist);

    System.out.println(desertIslandPlaylist.size());

    int indexA = desertIslandPlaylist.indexOf("Song 1");

    int indexB = desertIslandPlaylist.indexOf("Song 2");

    String tempA = "Song 1";

    desertIslandPlaylist.set(indexA, "Song 2");

    desertIslandPlaylist.set(indexB, tempA);

    System.out.println(desertIslandPlaylist);

    
  }
  
}