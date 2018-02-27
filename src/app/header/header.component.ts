import {Component, Output, EventEmitter} from '@angular/core';

@Component({
	selector:'app-header',
	templateUrl:'./header.component.html'
})

export class HeaderComponent{

	@Output() clickedButton=new EventEmitter<string>();

	onClick(feature: string){
		this.clickedButton.emit(feature);
	}


}
