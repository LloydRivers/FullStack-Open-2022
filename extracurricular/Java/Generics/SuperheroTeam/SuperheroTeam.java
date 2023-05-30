package Generics.SuperheroTeam;
import java.util.ArrayList;

public class SuperheroTeam {
    public static void main(String[] args) {
        // Create an ArrayList to hold superheroes
        ArrayList<String> superheroTeam = new ArrayList<>();

        // Gather the heroes
        superheroTeam.add("Iron Man"); // The genius billionaire playboy philanthropist
        superheroTeam.add("Captain America"); // The embodiment of justice and honor
        superheroTeam.add("Wonder Woman"); // The Amazonian warrior princess
        superheroTeam.add("Spider-Man"); // The friendly neighborhood web-slinger

        // Add a superheroine to the team
        superheroTeam.add("Black Widow"); // The skilled and fearless spy

        // Assemble the team and display their names
        System.out.println("Our Superhero Team:");

        for (String superhero : superheroTeam) {
            System.out.println(superhero);
        }

        // Find the size of the team
        int teamSize = superheroTeam.size();
        System.out.println("Team Size: " + teamSize);

        // Check if a specific superhero is in the team
        String searchHero = "Captain America";
        boolean isMember = superheroTeam.contains(searchHero);

        if (isMember) {
            System.out.println(searchHero + " is part of the team!");
        } else {
            System.out.println(searchHero + " is not found in the team.");
        }

        // Remove a superhero from the team
        String farewellHero = "Spider-Man";
        superheroTeam.remove(farewellHero);
        System.out.println(farewellHero + " has left the team.");

        // Updated team after the departure
        System.out.println("Updated Superhero Team:");

        for (String superhero : superheroTeam) {
            System.out.println(superhero);
        }
    }
}

/*
 In this enthralling tale, we create an ArrayList called superheroTeam, capable of holding String objects (ArrayList<String>). We assemble our team by adding the names of legendary superheroes. From the tech-savvy Iron Man to the valiant Captain America, the awe-inspiring Wonder Woman to the agile Spider-Man, and the formidable Black Widow, our team begins to take shape.

We then proudly showcase the assembled team by iterating over the ArrayList using a for-each loop. Each superhero's name is printed, filling the air with anticipation and excitement.

Next, we utilize the superpower of size() to determine the current size of our heroic team. It provides us with a numerical representation of the team's strength.

To ensure we haven't overlooked any vital heroes, we employ the mighty contains() method to check if a specific superhero is part of the team. In this case, we search for Captain America and celebrate his presence within our ranks.

Alas, adventures are not without their farewells. We bid farewell to Spider-Man as he departs from the team. With a touch of sorrow, we use the remove() method to eliminate his name from the ArrayList.

Finally, we proudly display the updated Superhero Team, reflecting the changes after Spider-Man's departure.

Through the power of generics and the flexibility of ArrayLists, we have crafted an epic tale of assembling, managing, and modifying our team of remarkable superheroes.

Now, my friend, go forth and continue your exploration of the captivating realms of Java! Should you have any more questions or seek further adventures, I am here to assist you.
 */
