import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import boatSearchresult from './boatSearchResults';

 // imports
 export default class BoatSearch extends NavigationMixin(LightningElement) {
    isLoading = false;
    
    // Handles loading event
    handleLoading() { }
    
    // Handles done loading event
    handleDoneLoading() { }
    
    // Handles search boat event
    // This custom event comes from the form
    searchBoats(event) { 
      this.template.querySelector('c-boat-search-results').searchBoats(event.detail.value);
    }
    
    createNewBoat() { 
      const pageReference =  {
        type: "standard__objectPage",
        attributes : {
          objectApiName : "Boat__c",
          actionName : "new"
        }
      };
      this[NavigationMixin.Navigate]({
        pageReference,
        replace : true
      });
    }
  }