package LanguageFamilies;
/*
 The Mayan class constructor is defined, which takes two parameters: languageName and speakers.

 The super() method is used to invoke the constructor of the parent class, Language. This is done using the super keyword followed by the argument list matching the constructor of the parent class.

 Inside super(), the values for the languageName, speakers, regionsSpoken, and wordOrder fields are provided. The languageName and speakers are passed directly from the constructor parameters.

 The values "Central America" and "verb-object-subject" are passed as default values for the regionsSpoken and wordOrder fields, respectively.

 By setting default values in the Mayan class constructor, you can instantiate a Mayan language object without explicitly specifying the regionsSpoken and wordOrder fields. These fields will be automatically set to the default values provided in the constructor.
 */

public class Mayan extends Language {

    Mayan(String languageName, int speakers) {
        super(languageName, speakers, "Central America", "verb-object-subject");
      }

        @Override
        public void getInfo() {
            System.out.println(this.name + " is spoken by " + this.numSpeakers + " people mainly in " + this.regionsSpoken + ". The language follows the word order: " + this.wordOrder + ".");
        }
    
}
