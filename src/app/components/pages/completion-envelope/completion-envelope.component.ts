import { Component, OnInit, ModuleWithProviders } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Highcharts from 'highcharts';

import { AllModules, Module } from '@ag-grid-enterprise/all-modules';
import { ModuleRegistry } from "@ag-grid-community/core";

ModuleRegistry.registerModules(AllModules);

import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { RichSelectModule } from '@ag-grid-enterprise/rich-select';
import { MasterDetailModule } from '@ag-grid-enterprise/master-detail';
import { MenuModule } from '@ag-grid-enterprise/menu';
import { ColumnsToolPanelModule } from '@ag-grid-enterprise/column-tool-panel';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MyModalComponent } from './../my-modal/my-modal.component';
import { ModalPPComponent } from './../modal-pp/modal-pp.component';
import { ModalPEComponent } from './../modal-pe/modal-pe.component';
import { ModalPTComponent } from './../modal-pt/modal-pt.component';
import { ModalVEComponent } from './../modal-ve/modal-ve.component';
import { ModalPbComponent } from './../modal-pb/modal-pb.component';
import { ModalHPComponent } from './../modal-hp/modal-hp.component';
import { ModalAAPComponent } from './../modal-a-ap/modal-a-ap.component';
import { ModalBAPComponent } from './../modal-b-ap/modal-b-ap.component';
import { ModalVCComponent } from './../modal-vc/modal-vc.component';
import { ModalVSComponent } from './../modal-vs/modal-vs.component';
import { ModalPrComponent } from './../modal-pr/modal-pr.component';
import { ModalKhComponent } from './../modal-kh/modal-kh.component';
import { ModalDdihrComponent } from './../modal-ddihr/modal-ddihr.component';
import { ModalSkComponent } from './../modal-sk/modal-sk.component';
import { ModalDdComponent } from './../modal-dd/modal-dd.component';
import { ModalPiComponent }  from './../modal-pi/modal-pi.component';
import { ModalDdlComponent }  from './../modal-ddl/modal-ddl.component';
import { ModalDdnextComponent }  from './../modal-ddnext/modal-ddnext.component';
import { ModalDd1hrLimComponent }  from './../modal-dd1hr-lim/modal-dd1hr-lim.component';
import { ModalDd1hrNextComponent }  from './../modal-dd1hr-next/modal-dd1hr-next.component';
import { ModalVcLimComponent } from './../modal-vc-lim/modal-vc-lim.component';
import { ModalVsLimComponent } from './../modal-vs-lim/modal-vs-lim.component';
import { ModalMbhpLimComponent } from './../modal-mbhp-lim/modal-mbhp-lim.component';
import { ModalMbhpCurrComponent } from './../modal-mbhp-curr/modal-mbhp-curr.component';
import { ModalFwhtLimComponent } from './../modal-fwht-lim/modal-fwht-lim.component';
import { ModalFwhtCurrComponent } from './../modal-fwht-curr/modal-fwht-curr.component';
import { ModalAccousSandComponent } from './../modal-accous-sand/modal-accous-sand.component';
import { ModalAccousCurrComponent } from './../modal-accous-curr/modal-accous-curr.component';
import { ModalSkLimComponent } from './../modal-sk-lim/modal-sk-lim.component';
import { ModalKhLimComponent } from './../modal-kh-lim/modal-kh-lim.component';
import { ModalDepLimComponent } from './../modal-dep-lim/modal-dep-lim.component';
import { ModalDepCurrComponent } from './../modal-dep-curr/modal-dep-curr.component';
import { ModalRiskLimComponent } from './../modal-risk-lim/modal-risk-lim.component';
import { ModalRiskCurrComponent } from './../modal-risk-curr/modal-risk-curr.component';
import { ModalPypCommComponent } from './../modal-pyp-comm/modal-pyp-comm.component';
import { ModalPpCommComponent } from './../modal-pp-comm/modal-pp-comm.component';
import { ModalPtCommComponent } from './../modal-pt-comm/modal-pt-comm.component';
import { ModalPeCommComponent } from './../modal-pe-comm/modal-pe-comm.component';
import { ModalAApCommComponent } from './../modal-a-ap-comm/modal-a-ap-comm.component';
import { ModalAcouCommComponent } from './../modal-acou-comm/modal-acou-comm.component';
import { ModalBApCommComponent } from './../modal-b-ap-comm/modal-b-ap-comm.component';
import { ModalDdCommComponent } from './../modal-dd-comm/modal-dd-comm.component';
import { ModalDd1hrCommComponent } from './../modal-dd1hr-comm/modal-dd1hr-comm.component';
import { ModalDepCommComponent } from './../modal-dep-comm/modal-dep-comm.component';
import { ModalFwhtCommComponent } from './../modal-fwht-comm/modal-fwht-comm.component';
import { ModalKhCommComponent } from './../modal-kh-comm/modal-kh-comm.component';
import { ModalMbhpCommComponent } from './../modal-mbhp-comm/modal-mbhp-comm.component';
import { ModalPiCommComponent } from './../modal-pi-comm/modal-pi-comm.component';
import { ModalRiskCommComponent } from './../modal-risk-comm/modal-risk-comm.component';
import { ModalSkinCommComponent } from './../modal-skin-comm/modal-skin-comm.component';
import { ModalVcCommComponent } from './../modal-vc-comm/modal-vc-comm.component';
import { ModalVsCommComponent } from './../modal-vs-comm/modal-vs-comm.component';
import { ModalVeCommComponent } from './../modal-ve-comm/modal-ve-comm.component';
import { ModalAApOwnComponent } from './../modal-a-ap-own/modal-a-ap-own.component';
import { ModalAcouOwnComponent } from './../modal-acou-own/modal-acou-own.component';
import { ModalBApOwnComponent } from './../modal-b-ap-own/modal-b-ap-own.component';
import { ModalDdOwnComponent } from './../modal-dd-own/modal-dd-own.component';
import { ModalDd1hrOwnComponent } from './../modal-dd1hr-own/modal-dd1hr-own.component';
import { ModalDepOwnComponent } from './../modal-dep-own/modal-dep-own.component';
import { ModalFwhtOwnComponent } from './../modal-fwht-own/modal-fwht-own.component';
import { ModalKhOwnComponent } from './../modal-kh-own/modal-kh-own.component';
import { ModalMbhpOwnComponent } from './../modal-mbhp-own/modal-mbhp-own.component';
import { ModalPeOwnComponent } from './../modal-pe-own/modal-pe-own.component';
import { ModalPiOwnComponent } from './../modal-pi-own/modal-pi-own.component';
import { ModalPpOwnComponent } from './../modal-pp-own/modal-pp-own.component';
import { ModalPtOwnComponent } from './../modal-pt-own/modal-pt-own.component';
import { ModalPypOwnComponent } from './../modal-pyp-own/modal-pyp-own.component';
import { ModalRiskOwnComponent } from './../modal-risk-own/modal-risk-own.component';
import { ModalSkinOwnComponent } from './../modal-skin-own/modal-skin-own.component';
import { ModalVcOwnComponent } from './../modal-vc-own/modal-vc-own.component';
import { ModalVsOwnComponent } from './../modal-vs-own/modal-vs-own.component';
import { ModalVeOwnComponent } from './../modal-ve-own/modal-ve-own.component';

import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';

import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import regression from 'regression';
import { ActivatedRoute } from '@angular/router'; 
import { SharedServiceService } from '../../../shared-service.services';

@Component({
  selector: 'app-completion-envelope',
  templateUrl: './completion-envelope.component.html',
  styleUrls: ['./completion-envelope.component.scss']
})
export class CompletionEnvelopeComponent implements OnInit {
  resultPYpValue: number = 0;
  resultPYpValueFromService: number = 0;
  resultPpValue: number = 0;
  resultPpValueFromService: number = 0;
  resultPtValue: number = 0;
  resultPtValueFromService: number = 0;
  resultPeValue: number = 0;
  resultPeValueFromService: number = 0;
  resultVeValue: number = 0;
  resultVeValueFromService: number = 0;
  resultAApValue: number = 0;
  resultAApValueFromService: number = 0;
  resultBApValue: number = 0;
  resultBApValueFromService: number = 0;
  resultDDlValue: number = 0;
  resultDDlValueFromService: number = 0;
  resultDdValue: number = 0;
  resultDdValueFromService: number = 0;
  resultDdnextValue: number = 0;
  resultDdnextValueFromService: number = 0;
  resultDd1hrLimValue: number = 0;
  resultDd1hrLimValueFromService: number = 0;
  resultDd1hrNextValue: number = 0;
  resultDd1hrNextValueFromService: number = 0;
  resultPINextValue: number = 0;
  resultPINextValueFromService : number = 0;
  resultVcLimValue : number = 0;
  resultVcLimValueFromService : number = 0;
  resultVsLimValue : number = 0;
  resultVsLimValueFromService : number = 0;
  resultMbhpLimValue : number = 0;
  resultMbhpLimValueFromService : number = 0; 
  resultMbhpCurrValue : number = 0;
  resultMbhpCurrValueFromService : number = 0;
  resultFwhtLimValue : number = 0;
  resultFwhtLimValueFromService : number = 0;
  resultFwhtCurrValue : number = 0;
  resultFwhtCurrValueFromService : number = 0;
  resultAcouLimValue : string;
  resultAcouLimValueFromService : string;
  resultAcouCurrValue : string;
  resultAcouCurrValueFromService : string;
  resultSkinLimValue : string;
  resultSkinLimValueFromService : string;
  resultKhLimValue : string;
  resultKhLimValueFromService : string;
  resultDepLimValue: number = 0;
  resultDepLimValueFromService : number = 0;
  resultDepCurrValue: number = 0;
  resultDepCurrValueFromService : number = 0;
  resultRiskLimValue: string = 'H';
  resultRiskLimValueFromService  : string = 'H';
  resultRiskCurrValue: string = 'M';
  resultRiskCurrValueFromService  : string = 'M';
  resultPypCommValue: string = "Put your comment here";
  resultPypCommValueFromService: string = "Put your comment here";
  resultPpCommValue: string = "Put your comment here";
  resultPpCommValueFromService: string = "Put your comment here";
  resultPtCommValue: string = "Put your comment here";
  resultPtCommValueFromService: string = "Put your comment here";
  resultPeCommValue: string = "Put your comment here";
  resultPeCommValueFromService: string = "Put your comment here";
  resultAapCommValue: string = "Put your comment here";
  resultAapCommValueFromService: string = "Put your comment here";
  resultAcouCommValue: string = "Put your comment here";
  resultAcouCommValueFromService: string = "Put your comment here";
  resultBapCommValue: string = "Put your comment here";
  resultBapCommValueFromService: string = "Put your comment here";
  resultDDCommValue: string = "Put your comment here";
  resultDDCommValueFromService: string = "Put your comment here";
  resultDd1hrCommValue: string = "Put your comment here";
  resultDd1hrCommValueFromService: string = "Put your comment here";
  resultDepCommValue: string = "Put your comment here";
  resultDepCommValueFromService: string = "Put your comment here";
  resultFwhtCommValue: string = "Put your comment here";
  resultFwhtCommValueFromService: string = "Put your comment here";
  resultKhCommValue: string = "Put your comment here";
  resultKhCommValueFromService: string = "Put your comment here";
  resultMbhpCommValue: string = "Put your comment here";
  resultMbhpCommValueFromService: string = "Put your comment here";
  resultPiCommValue: string = "Put your comment here";
  resultPiCommValueFromService: string = "Put your comment here";
  resultRiskCommValue: string = "Put your comment here";
  resultRiskCommValueFromService: string = "Put your comment here";
  resultSkinCommValue: string = "Put your comment here";
  resultSkinCommValueFromService: string = "Put your comment here";
  resultVcCommValue: string = "Put your comment here";
  resultVcCommValueFromService: string = "Put your comment here";
  resultVsCommValue: string = "Put your comment here";
  resultVsCommValueFromService: string = "Put your comment here";
  resultVeCommValue: string = "Put your comment here";
  resultVeCommValueFromService: string = "Put your comment here";
  resultaapOwnValue: string = "Owner's name";
  resultaapOwnValueFromService: string = "Owner's name";
  resultAcouOwnValue: string = "Owner's name";
  resultAcouOwnValueFromService: string = "Owner's name";
  resultBapOwnValue: string = "Owner's name";
  resultBapOwnValueFromService: string = "Owner's name";
  resultDdOwnValue: string = "Owner's name";
  resultDdOwnValueFromService: string = "Owner's name";
  resultDd1hrOwnValue: string = "Owner's name";
  resultDd1hrOwnValueFromService: string = "Owner's name";
  resultDepOwnValue: string = "Owner's name";
  resultDepOwnValueFromService: string = "Owner's name";
  resultFwhtOwnValue: string = "Owner's name";
  resultFwhtOwnValueFromService: string = "Owner's name";
  resultKhOwnValue: string = "Owner's name";
  resultKhOwnValueFromService: string = "Owner's name";
  resultMbhpOwnValue: string = "Owner's name";
  resultMbhpOwnValueFromService: string = "Owner's name";
  resultPeOwnValue: string = "Owner's name";
  resultPeOwnValueFromService: string = "Owner's name";
  resultPiOwnValue: string = "Owner's name";
  resultPiOwnValueFromService: string = "Owner's name";
  resultPpOwnValue: string = "Owner's name";
  resultPpOwnValueFromService: string = "Owner's name";
  resultPtOwnValue: string = "Owner's name";
  resultPtOwnValueFromService: string = "Owner's name";
  resultPypOwnValue: string = "Owner's name";
  resultPypOwnValueFromService: string = "Owner's name";
  resultRiskOwnValue: string = "Owner's name";
  resultRiskOwnValueFromService: string = "Owner's name";
  resultSkinOwnValue: string = "Owner's name";
  resultSkinOwnValueFromService: string = "Owner's name";
  resultVcOwnValue: string = "Owner's name";
  resultVcOwnValueFromService: string = "Owner's name";
  resultVsOwnValue: string = "Owner's name";
  resultVsOwnValueFromService: string = "Owner's name";
  resultVeOwnValue: string = "Owner's name";
  resultVeOwnValueFromService: string = "Owner's name";

 // Modal ts file
 constructor(public dialog: MatDialog,
  public activatedRoute: ActivatedRoute, 
  public sharedService: SharedServiceService) { }

 openDialog(): void {
   const dialogRef = this.dialog.open(MyModalComponent, {
     width: '250px',
     data: { name: this.name, color: this.color }
   });

   dialogRef.afterClosed().subscribe(res => {
     this.color = res;
   });
 }
 
 name: string;
 color: string;
 /*---------------------------------------*/
  open_1Dialog(): void {
   const dialogRef = this.dialog.open(ModalPEComponent, {
     width: '250px',
     data: { name: this.name, color: this.color }
   });

   dialogRef.afterClosed().subscribe(res => {
     this.color = res;
   });
 }

 /*---------------------------------------*/
 open_2Dialog(): void {
   const dialogRef = this.dialog.open(ModalPPComponent, {
     width: '250px',
     data: { name: this.name, color: this.color }
   });

   dialogRef.afterClosed().subscribe(res => {
     this.color = res;
   });
 }

   /*---------------------------------------*/
   open_3Dialog(): void {
     const dialogRef = this.dialog.open(ModalPTComponent, {
       width: '250px',
       data: { name: this.name, color: this.color }
     });
 
     dialogRef.afterClosed().subscribe(res => {
       this.color = res;
     });
   }
 
       /*---------------------------------------*/
       open_4Dialog(): void {
         const dialogRef = this.dialog.open(ModalVEComponent, {
           width: '250px',
           data: { name: this.name, color: this.color }
         });
     
         dialogRef.afterClosed().subscribe(res => {
           this.color = res;
         });
       }
          /*---------------------------------------*/
          open_5Dialog(): void {
           const dialogRef = this.dialog.open(ModalPbComponent, {
             width: '250px',
             data: { name: this.name, color: this.color }
           });
       
           dialogRef.afterClosed().subscribe(res => {
             this.color = res;
           });
         }

 /*---------------------------------------*/
 open_6Dialog(): void {
   const dialogRef = this.dialog.open(ModalHPComponent, {
     width: '250px',
     data: { name: this.name, color: this.color }
   });

   dialogRef.afterClosed().subscribe(res => {
     this.color = res;
   });
 }

  /*---------------------------------------*/
  open_7Dialog(): void {
   const dialogRef = this.dialog.open(ModalAAPComponent, {
     width: '250px',
     data: { name: this.name, color: this.color }
   });

   dialogRef.afterClosed().subscribe(res => {
     this.color = res;
   });
 }

 /*---------------------------------------*/
 open_8Dialog(): void {
   const dialogRef = this.dialog.open(ModalBAPComponent, {
     width: '250px',
     data: { name: this.name, color: this.color }
   });

   dialogRef.afterClosed().subscribe(res => {
     this.color = res;
   });
 }

 /*---------------------------------------*/
 open_9Dialog(): void {
   const dialogRef = this.dialog.open(ModalDdComponent, {
     width: '250px',
     data: { name: this.name, color: this.color }
   });

   dialogRef.afterClosed().subscribe(res => {
     this.color = res;
   });
 }
/*---------------------------------------*/
open_10Dialog(): void {
 const dialogRef = this.dialog.open(ModalDdihrComponent, {
   width: '250px',
   data: { name: this.name, color: this.color }
 });

 dialogRef.afterClosed().subscribe(res => {
   this.color = res;
 });
}

/*---------------------------------------*/
open_11Dialog(): void {
 const dialogRef = this.dialog.open(ModalPiComponent, {
   width: '250px',
   data: { name: this.name, color: this.color }
 });

 dialogRef.afterClosed().subscribe(res => {
   this.color = res;
 });
}
   /*---------------------------------------*/
   open_12Dialog(): void {
     const dialogRef = this.dialog.open(ModalVCComponent, {
       width: '250px',
       data: { name: this.name, color: this.color }
     });
 
     dialogRef.afterClosed().subscribe(res => {
       this.color = res;
     });
   }
   /*---------------------------------------*/
   open_13Dialog(): void {
     const dialogRef = this.dialog.open(ModalVSComponent, {
       width: '250px',
       data: { name: this.name, color: this.color }
     });
 
     dialogRef.afterClosed().subscribe(res => {
       this.color = res;
     });
   }

    /*---------------------------------------*/
    open_14Dialog(): void {
     const dialogRef = this.dialog.open(ModalPrComponent, {
       width: '250px',
       data: { name: this.name, color: this.color }
     });
 
     dialogRef.afterClosed().subscribe(res => {
       this.color = res;
     });
   }

     /*---------------------------------------*/
     open_15Dialog(): void {
       const dialogRef = this.dialog.open(ModalKhComponent, {
         width: '250px',
         data: { name: this.name, color: this.color }
       });
   
       dialogRef.afterClosed().subscribe(res => {
         this.color = res;
       });
     }
      /*---------------------------------------*/
      open_16Dialog(): void {
       const dialogRef = this.dialog.open(ModalSkComponent, {
         width: '250px',
         data: { name: this.name, color: this.color }
       });
   
       dialogRef.afterClosed().subscribe(res => {
         this.color = res;
       });
     }
      /*---------------------------------------*/
      open_17Dialog(): void {
        const dialogRef = this.dialog.open(ModalDdlComponent, {
          width: '250px',
          data: { name: this.name, color: this.color }
        });
    
        dialogRef.afterClosed().subscribe(res => {
          this.color = res;
        });
      }

      /*---------------------------------------*/
      open_18Dialog(): void {
        const dialogRef = this.dialog.open(ModalDdnextComponent, {
          width: '250px',
          data: { name: this.name, color: this.color }
        });
    
        dialogRef.afterClosed().subscribe(res => {
          this.color = res;
        });
      }

           /*---------------------------------------*/
           open_19Dialog(): void {
            const dialogRef = this.dialog.open(ModalDd1hrLimComponent, {
              width: '250px',
              data: { name: this.name, color: this.color }
            });
        
            dialogRef.afterClosed().subscribe(res => {
              this.color = res;
            });
          }
       /*---------------------------------------*/
       open_20Dialog(): void {
        const dialogRef = this.dialog.open(ModalDd1hrNextComponent, {
          width: '250px',
          data: { name: this.name, color: this.color }
        });
    
        dialogRef.afterClosed().subscribe(res => {
          this.color = res;
        });
      }

        /*---------------------------------------*/
        open_23Dialog(): void {
          const dialogRef = this.dialog.open(ModalVcLimComponent, {
            width: '250px',
            data: { name: this.name, color: this.color }
          });
      
          dialogRef.afterClosed().subscribe(res => {
            this.color = res;
          });
        }

              /*---------------------------------------*/
              open_24Dialog(): void {
                const dialogRef = this.dialog.open(ModalVsLimComponent, {
                  width: '250px',
                  data: { name: this.name, color: this.color }
                });
            
                dialogRef.afterClosed().subscribe(res => {
                  this.color = res;
                });
              }
       /*---------------------------------------*/
       open_25Dialog(): void {
        const dialogRef = this.dialog.open(ModalMbhpLimComponent, {
          width: '250px',
          data: { name: this.name, color: this.color }
        });
    
        dialogRef.afterClosed().subscribe(res => {
          this.color = res;
        });
      }
    /*-------6-------------------------------*/
    open_26Dialog(): void {
      const dialogRef = this.dialog.open(ModalMbhpCurrComponent, {
        width: '250px',
        data: { name: this.name, color: this.color }
      });
  
      dialogRef.afterClosed().subscribe(res => {
        this.color = res;
      });
    }

     /*-------6-------------------------------*/
     open_27Dialog(): void {
      const dialogRef = this.dialog.open(ModalFwhtLimComponent, {
        width: '250px',
        data: { name: this.name, color: this.color }
      });
  
      dialogRef.afterClosed().subscribe(res => {
        this.color = res;
      });
    }

     /*-------6-------------------------------*/
     open_28Dialog(): void {
      const dialogRef = this.dialog.open(ModalFwhtCurrComponent, {
        width: '250px',
        data: { name: this.name, color: this.color }
      });
  
      dialogRef.afterClosed().subscribe(res => {
        this.color = res;
      });
    }

     /*-------6-------------------------------*/
     open_29Dialog(): void {
      const dialogRef = this.dialog.open(ModalAccousSandComponent, {
        width: '250px',
        data: { name: this.name, color: this.color }
      });
  
      dialogRef.afterClosed().subscribe(res => {
        this.color = res;
      });
    }  
     /*-------6-------------------------------*/
     open_30Dialog(): void {
      const dialogRef = this.dialog.open(ModalAccousCurrComponent, {
        width: '250px',
        data: { name: this.name, color: this.color }
      });
  
      dialogRef.afterClosed().subscribe(res => {
        this.color = res;
      });
    }
     /*-------6-------------------------------*/
     open_31Dialog(): void {
      const dialogRef = this.dialog.open(ModalSkLimComponent, {
        width: '250px',
        data: { name: this.name, color: this.color }
      });
  
      dialogRef.afterClosed().subscribe(res => {
        this.color = res;
      });
    }
    /*-------6-------------------------------*/
    open_33Dialog(): void {
      const dialogRef = this.dialog.open(ModalKhLimComponent, {
        width: '250px',
        data: { name: this.name, color: this.color }
      });
  
      dialogRef.afterClosed().subscribe(res => {
        this.color = res;
      });
    }

    /*-------6-------------------------------*/
    open_34Dialog(): void {
      const dialogRef = this.dialog.open(ModalDepLimComponent, {
        width: '250px',
        data: { name: this.name, color: this.color }
      });
  
      dialogRef.afterClosed().subscribe(res => {
        this.color = res;
      });
    }

      /*-------6-------------------------------*/
      open_35Dialog(): void {
        const dialogRef = this.dialog.open(ModalDepCurrComponent, {
          width: '250px',
          data: { name: this.name, color: this.color }
        });
    
        dialogRef.afterClosed().subscribe(res => {
          this.color = res;
        });
      }
       /*-------6-------------------------------*/
       open_36Dialog(): void {
        const dialogRef = this.dialog.open(ModalRiskLimComponent, {
          width: '250px',
          data: { name: this.name, color: this.color }
        });
    
        dialogRef.afterClosed().subscribe(res => {
          this.color = res;
        });
      }

      /*-------6-------------------------------*/
      open_37Dialog(): void {
        const dialogRef = this.dialog.open(ModalRiskCurrComponent, {
          width: '250px',
          data: { name: this.name, color: this.color }
        });
    
        dialogRef.afterClosed().subscribe(res => {
          this.color = res;
        });
      }
        /*-------6-------------------------------*/
        open_38Dialog(): void {
          const dialogRef = this.dialog.open(ModalPypCommComponent, {
            width: '250px',
            data: { name: this.name, color: this.color }
          });
      
          dialogRef.afterClosed().subscribe(res => {
            this.color = res;
          });
        }

        /*-------6-------------------------------*/
        open_39Dialog(): void {
          const dialogRef = this.dialog.open(ModalPpCommComponent, {
            width: '250px',
            data: { name: this.name, color: this.color }
          });
      
          dialogRef.afterClosed().subscribe(res => {
            this.color = res;
          });
        }

        /*-------6-------------------------------*/
        open_40Dialog(): void {
          const dialogRef = this.dialog.open(ModalPtCommComponent, {
            width: '250px',
            data: { name: this.name, color: this.color }
          });
      
          dialogRef.afterClosed().subscribe(res => {
            this.color = res;
          });
        }

         /*-------6-------------------------------*/
         open_41Dialog(): void {
          const dialogRef = this.dialog.open(ModalPeCommComponent, {
            width: '250px',
            data: { name: this.name, color: this.color }
          });
      
          dialogRef.afterClosed().subscribe(res => {
            this.color = res;
          });
        }

        /*-------6-------------------------------*/
        open_42Dialog(): void {
          const dialogRef = this.dialog.open(ModalAApCommComponent, {
            width: '250px',
            data: { name: this.name, color: this.color }
          });
      
          dialogRef.afterClosed().subscribe(res => {
            this.color = res;
          });
        }
          /*-------6-------------------------------*/
          open_43Dialog(): void {
            const dialogRef = this.dialog.open(ModalAcouCommComponent, {
              width: '250px',
              data: { name: this.name, color: this.color }
            });
        
            dialogRef.afterClosed().subscribe(res => {
              this.color = res;
            });
          }
    /*-------6-------------------------------*/
    open_44Dialog(): void {
      const dialogRef = this.dialog.open(ModalBApCommComponent, {
        width: '250px',
        data: { name: this.name, color: this.color }
      });
  
      dialogRef.afterClosed().subscribe(res => {
        this.color = res;
      });
    }

    /*-------6-------------------------------*/
    open_45Dialog(): void {
      const dialogRef = this.dialog.open(ModalDdCommComponent, {
        width: '250px',
        data: { name: this.name, color: this.color }
      });
  
      dialogRef.afterClosed().subscribe(res => {
        this.color = res;
      });
    }

    /*-------6-------------------------------*/
    open_46Dialog(): void {
      const dialogRef = this.dialog.open(ModalDd1hrCommComponent, {
        width: '250px',
        data: { name: this.name, color: this.color }
      });
  
      dialogRef.afterClosed().subscribe(res => {
        this.color = res;
      });
    }

    /*-------6-------------------------------*/
    open_47Dialog(): void {
      const dialogRef = this.dialog.open(ModalDepCommComponent, {
        width: '250px',
        data: { name: this.name, color: this.color }
      });
  
      dialogRef.afterClosed().subscribe(res => {
        this.color = res;
      });
    }

   /*-------6-------------------------------*/
   open_48Dialog(): void {
    const dialogRef = this.dialog.open(ModalFwhtCommComponent, {
      width: '250px',
      data: { name: this.name, color: this.color }
    });

    dialogRef.afterClosed().subscribe(res => {
      this.color = res;
    });
  }
   /*-------6-------------------------------*/
   open_49Dialog(): void {
    const dialogRef = this.dialog.open(ModalKhCommComponent, {
      width: '250px',
      data: { name: this.name, color: this.color }
    });

    dialogRef.afterClosed().subscribe(res => {
      this.color = res;
    });
  }

    /*-------6-------------------------------*/
    open_50Dialog(): void {
      const dialogRef = this.dialog.open(ModalMbhpCommComponent, {
        width: '250px',
        data: { name: this.name, color: this.color }
      });
  
      dialogRef.afterClosed().subscribe(res => {
        this.color = res;
      });
    }
   /*-------6-------------------------------*/
   open_51Dialog(): void {
    const dialogRef = this.dialog.open(ModalPiCommComponent, {
      width: '250px',
      data: { name: this.name, color: this.color }
    });

    dialogRef.afterClosed().subscribe(res => {
      this.color = res;
    });
  }
  /*-------6-------------------------------*/
  open_52Dialog(): void {
    const dialogRef = this.dialog.open(ModalRiskCommComponent, {
      width: '250px',
      data: { name: this.name, color: this.color }
    });

    dialogRef.afterClosed().subscribe(res => {
      this.color = res;
    });
  }
   /*-------6-------------------------------*/
   open_53Dialog(): void {
    const dialogRef = this.dialog.open(ModalSkinCommComponent, {
      width: '250px',
      data: { name: this.name, color: this.color }
    });

    dialogRef.afterClosed().subscribe(res => {
      this.color = res;
    });
  }

     /*-------6-------------------------------*/
     open_54Dialog(): void {
      const dialogRef = this.dialog.open(ModalVcCommComponent, {
        width: '250px',
        data: { name: this.name, color: this.color }
      });
  
      dialogRef.afterClosed().subscribe(res => {
        this.color = res;
      });
    }

     /*-------6-------------------------------*/
     open_55Dialog(): void {
      const dialogRef = this.dialog.open(ModalVsCommComponent, {
        width: '250px',
        data: { name: this.name, color: this.color }
      });
  
      dialogRef.afterClosed().subscribe(res => {
        this.color = res;
      });
    }
     /*-------6-------------------------------*/
     open_56Dialog(): void {
      const dialogRef = this.dialog.open(ModalVeCommComponent, {
        width: '250px',
        data: { name: this.name, color: this.color }
      });
  
      dialogRef.afterClosed().subscribe(res => {
        this.color = res;
      });
    }
/*-------6-------------------------------*/
open_57Dialog(): void {
  const dialogRef = this.dialog.open(ModalAApOwnComponent, {
    width: '250px',
    data: { name: this.name, color: this.color }
  });

  dialogRef.afterClosed().subscribe(res => {
    this.color = res;
  });
}
/*-------6-------------------------------*/
open_58Dialog(): void {
  const dialogRef = this.dialog.open(ModalAcouOwnComponent, {
    width: '250px',
    data: { name: this.name, color: this.color }
  });

  dialogRef.afterClosed().subscribe(res => {
    this.color = res;
  });
}
/*-------6-------------------------------*/
open_59Dialog(): void {
  const dialogRef = this.dialog.open(ModalBApOwnComponent, {
    width: '250px',
    data: { name: this.name, color: this.color }
  });

  dialogRef.afterClosed().subscribe(res => {
    this.color = res;
  });
}
/*-------6-------------------------------*/
open_60Dialog(): void {
  const dialogRef = this.dialog.open(ModalDdOwnComponent, {
    width: '250px',
    data: { name: this.name, color: this.color }
  });

  dialogRef.afterClosed().subscribe(res => {
    this.color = res;
  });
}
/*-------6-------------------------------*/
open_61Dialog(): void {
  const dialogRef = this.dialog.open(ModalDd1hrOwnComponent, {
    width: '250px',
    data: { name: this.name, color: this.color }
  });

  dialogRef.afterClosed().subscribe(res => {
    this.color = res;
  });
}
/*-------6-------------------------------*/
open_62Dialog(): void {
  const dialogRef = this.dialog.open(ModalDepOwnComponent, {
    width: '250px',
    data: { name: this.name, color: this.color }
  });

  dialogRef.afterClosed().subscribe(res => {
    this.color = res;
  });
}
/*-------6-------------------------------*/
open_63Dialog(): void {
  const dialogRef = this.dialog.open(ModalFwhtOwnComponent, {
    width: '250px',
    data: { name: this.name, color: this.color }
  });

  dialogRef.afterClosed().subscribe(res => {
    this.color = res;
  });
}
/*-------6-------------------------------*/
open_64Dialog(): void {
  const dialogRef = this.dialog.open(ModalKhOwnComponent, {
    width: '250px',
    data: { name: this.name, color: this.color }
  });

  dialogRef.afterClosed().subscribe(res => {
    this.color = res;
  });
}
/*-------6-------------------------------*/
open_65Dialog(): void {
  const dialogRef = this.dialog.open(ModalMbhpOwnComponent, {
    width: '250px',
    data: { name: this.name, color: this.color }
  });

  dialogRef.afterClosed().subscribe(res => {
    this.color = res;
  });
}
/*-------6-------------------------------*/
open_66Dialog(): void {
  const dialogRef = this.dialog.open(ModalPeOwnComponent, {
    width: '250px',
    data: { name: this.name, color: this.color }
  });

  dialogRef.afterClosed().subscribe(res => {
    this.color = res;
  });
}
/*-------6-------------------------------*/
open_67Dialog(): void {
  const dialogRef = this.dialog.open(ModalPiOwnComponent, {
    width: '250px',
    data: { name: this.name, color: this.color }
  });

  dialogRef.afterClosed().subscribe(res => {
    this.color = res;
  });
}
/*-------6-------------------------------*/
open_68Dialog(): void {
  const dialogRef = this.dialog.open(ModalPpOwnComponent, {
    width: '250px',
    data: { name: this.name, color: this.color }
  });

  dialogRef.afterClosed().subscribe(res => {
    this.color = res;
  });
}
/*-------6-------------------------------*/
open_69Dialog(): void {
  const dialogRef = this.dialog.open(ModalPtOwnComponent, {
    width: '250px',
    data: { name: this.name, color: this.color }
  });

  dialogRef.afterClosed().subscribe(res => {
    this.color = res;
  });
}
/*-------6-------------------------------*/
open_70Dialog(): void {
  const dialogRef = this.dialog.open(ModalPypOwnComponent, {
    width: '250px',
    data: { name: this.name, color: this.color }
  });

  dialogRef.afterClosed().subscribe(res => {
    this.color = res;
  });
}

/*-------6-------------------------------*/
open_71Dialog(): void {
  const dialogRef = this.dialog.open(ModalRiskOwnComponent, {
    width: '250px',
    data: { name: this.name, color: this.color }
  });

  dialogRef.afterClosed().subscribe(res => {
    this.color = res;
  });
}

/*-------6-------------------------------*/
open_72Dialog(): void {
  const dialogRef = this.dialog.open(ModalSkinOwnComponent, {
    width: '250px',
    data: { name: this.name, color: this.color }
  });

  dialogRef.afterClosed().subscribe(res => {
    this.color = res;
  });
}
/*-------6-------------------------------*/
open_73Dialog(): void {
  const dialogRef = this.dialog.open(ModalVcOwnComponent, {
    width: '250px',
    data: { name: this.name, color: this.color }
  });

  dialogRef.afterClosed().subscribe(res => {
    this.color = res;
  });
}
/*-------6-------------------------------*/
open_74Dialog(): void {
  const dialogRef = this.dialog.open(ModalVsOwnComponent, {
    width: '250px',
    data: { name: this.name, color: this.color }
  });

  dialogRef.afterClosed().subscribe(res => {
    this.color = res;
  });
}
/*-------6-------------------------------*/
open_75Dialog(): void {
  const dialogRef = this.dialog.open(ModalVeOwnComponent, {
    width: '250px',
    data: { name: this.name, color: this.color }
  });

  dialogRef.afterClosed().subscribe(res => {
    this.color = res;
  });
}
//____________________________________________________________________//

Wells = [
  'Well-1',
  'Well-2',
  'Well-3',
  'Well-4',
  'Well-5'
]

  ngOnInit() {

    this.resultPYpValue = window.history.state.resultPYp;
    // or
    this.resultPYpValueFromService = this.sharedService.storePYpValue;

    this.resultPpValue = window.history.state.resultPp;
    // or
    this.resultPpValueFromService = this.sharedService.storePpValue;

    this.resultPtValue = window.history.state.resultPt;
    // or
    this.resultPtValueFromService = this.sharedService.storePtValue;
    
    this.resultPeValue = window.history.state.resultPe;
    // or
    this.resultPeValueFromService = this.sharedService.storePeValue;

    this.resultVeValue = window.history.state.resultVe;
    // or
    this.resultVeValueFromService = this.sharedService.storeVeValue;

    this.resultAApValue = window.history.state.resultAAp;
    // or
    this.resultAApValueFromService = this.sharedService.storeAApValue;

    this.resultBApValue = window.history.state.resultBAp;
    // or
    this.resultBApValueFromService = this.sharedService.storeBApValue;

    this.resultDDlValue = window.history.state.resultDDl;
    // or
    this.resultDDlValueFromService = this.sharedService.storeDDlValue;

    this.resultDdValue = window.history.state.resultDd;
    // or
    this.resultDdValueFromService = this.sharedService.storeDdValue;
    
    this.resultDdnextValue = window.history.state.resultDdnext;
    // or
    this.resultDdnextValueFromService = this.sharedService.storeDdnextValue;
 
    this.resultDd1hrLimValue = window.history.state.resultDd1hrLim;
    // or
    this.resultDd1hrLimValueFromService = this.sharedService.storeDd1hrlimValue;

    this.resultDd1hrNextValue = window.history.state.resultDd1hrNext;
    // or
    this.resultDd1hrNextValueFromService = this.sharedService.storeDd1hrnextValue;

    this.resultPINextValue = window.history.state.resultPINext;
    // or
    this.resultPINextValueFromService = this.sharedService.storePinextValue;

    this.resultVcLimValue = window.history.state.resultVcLim;
    // or
    this.resultVcLimValueFromService = this.sharedService.storeVcLimValue;

    this.resultVsLimValue = window.history.state.resultVsLim;
    // or
    this.resultVsLimValueFromService = this.sharedService.storeVsLimValue;

    this.resultMbhpCurrValue = window.history.state.resultMbhpCurr;
    // or
    this.resultMbhpCurrValueFromService = this.sharedService.storeMbhpCurrValue;

    this.resultFwhtLimValue = window.history.state.resultFwhtLim;
    // or
    this.resultFwhtLimValueFromService = this.sharedService.storeFwhtLimValue;

    this.resultFwhtCurrValue = window.history.state.resultFwhtCurr;
    // or
    this.resultFwhtCurrValueFromService = this.sharedService.storeFwhtCurrValue;

    this.resultAcouLimValue = window.history.state.resultAcouLim;
    // or
    this.resultAcouLimValueFromService = this.sharedService.storeAcouLimValue;

    this.resultAcouCurrValue = window.history.state.resultAcouCurr;
    // or
    this.resultAcouCurrValueFromService = this.sharedService.storeAcouCurrValue;

    this.resultSkinLimValue = window.history.state.resultSkinLim;
    // or
    this.resultSkinLimValueFromService = this.sharedService.storeSkinLimValue;

    this.resultKhLimValue = window.history.state.resultKhLim;
    // or
    this.resultKhLimValueFromService = this.sharedService.storeKhLimValue;

    this.resultDepLimValue = window.history.state.resultDepLim;
    // or
    this.resultDepLimValueFromService = this.sharedService.storeDepLimValue;

    this.resultDepCurrValue = window.history.state.resultDepCurr;
    // or
    this.resultDepCurrValueFromService = this.sharedService.storeDepCurrValue;

    this.resultRiskLimValue = window.history.state.resultRiskLim;
    // or
    this.resultRiskLimValueFromService = this.sharedService.storeRiskLimValue;

    this.resultRiskCurrValue = window.history.state.resultRiskCurr;
    // or
    this.resultRiskCurrValueFromService = this.sharedService.storeRiskCurrValue;

    this.resultPypCommValue = window.history.state.resultPypComm;
    // or
    this.resultPypCommValueFromService = this.sharedService.storePypCommValue;

    this.resultPpCommValue = window.history.state.resultPpComm;
    // or
    this.resultPpCommValueFromService = this.sharedService.storePpCommValue;

    this.resultPtCommValue = window.history.state.resultPtComm;
    // or
    this.resultPtCommValueFromService = this.sharedService.storePtCommValue;

    this.resultPeCommValue = window.history.state.resultPeComm;
    // or
    this.resultPeCommValueFromService = this.sharedService.storePeCommValue;

    this.resultAapCommValue = window.history.state.resultAapComm;
    // or
    this.resultAapCommValueFromService = this.sharedService.storeAapCommValue;

    this.resultAcouCommValue = window.history.state.resultAcouComm;
    // or
    this.resultAcouCommValueFromService = this.sharedService.storeAcouCommValue;
 
    this.resultBapCommValue = window.history.state.resultBapComm;
    // or
    this.resultBapCommValueFromService = this.sharedService.storeBapCommValue;

    this.resultDDCommValue = window.history.state.resultDDComm;
    // or
    this.resultDDCommValueFromService = this.sharedService.storeDDCommValue;

    this.resultDd1hrCommValue = window.history.state.resultDd1hrComm;
    // or
    this.resultDd1hrCommValueFromService = this.sharedService.storeDD1hrCommValue;

    this.resultDepCommValue = window.history.state.resultDepComm;
    // or
    this.resultDepCommValueFromService = this.sharedService.storeDepCommValue;

    this.resultFwhtCommValue = window.history.state.resultFwhtComm;
    // or
    this.resultFwhtCommValueFromService = this.sharedService.storeFwhtCommValue;

    this.resultKhCommValue = window.history.state.resultKHComm;
    // or
    this.resultKhCommValueFromService = this.sharedService.storeKHCommValue;

    this.resultMbhpCommValue = window.history.state.resultMbhpComm;
    // or
    this.resultMbhpCommValueFromService = this.sharedService.storeMbhpCommValue;

    this.resultPiCommValue = window.history.state.resultPiComm;
    // or
    this.resultPiCommValueFromService = this.sharedService.storePiCommValue;

    this.resultRiskCommValue = window.history.state.resultRiskComm;
    // or
    this.resultRiskCommValueFromService = this.sharedService.storeRiskCommValue;

    this.resultSkinCommValue = window.history.state.resultSkinComm;
    // or
    this.resultSkinCommValueFromService = this.sharedService.storeSkinCommValue;

    this.resultVcCommValue = window.history.state.resultVcComm;
    // or
    this.resultVcCommValueFromService = this.sharedService.storeVcCommValue;

    this.resultVsCommValue = window.history.state.resultVsComm;
    // or
    this.resultVsCommValueFromService = this.sharedService.storeVsCommValue;

    this.resultVeCommValue = window.history.state.resultVeComm;
    // or
    this.resultVeCommValueFromService = this.sharedService.storeVeCommValue;

    this.resultaapOwnValue = window.history.state.resultaapOwn;
    // or
    this.resultaapOwnValueFromService = this.sharedService.storeAapOwnValue;

    this.resultAcouOwnValue = window.history.state.resultAcouOwn;
    // or
    this.resultAcouOwnValueFromService = this.sharedService.storeAcouOwnValue;

    this.resultBapOwnValue = window.history.state.resultBapOwn;
    // or
    this.resultBapOwnValueFromService = this.sharedService.storeBapOwnValue;

    this.resultDdOwnValue = window.history.state.resultDdOwn;
    // or
    this.resultDdOwnValueFromService = this.sharedService.storeDdOwnValue;

    this.resultDd1hrOwnValue = window.history.state.resultDd1hrOwn;
    // or
    this.resultDd1hrOwnValueFromService = this.sharedService.storeDd1hrOwnValue;

    this.resultDepOwnValue = window.history.state.resultDepOwn;
    // or
    this.resultDepOwnValueFromService = this.sharedService.storeDepOwnValue;

    this.resultFwhtOwnValue = window.history.state.resultFwhtOwn;
    // or
    this.resultFwhtOwnValueFromService = this.sharedService.storeFwhtOwnValue;

    this.resultKhOwnValue = window.history.state.resultKhOwn;
    // or
    this.resultKhOwnValueFromService = this.sharedService.storeKhOwnValue;
    
    this.resultMbhpOwnValue = window.history.state.resultMbhpOwn;
    // or
    this.resultMbhpOwnValueFromService = this.sharedService.storeMbhpOwnValue;

    this.resultPeOwnValue = window.history.state.resultPeOwn;
    // or
    this.resultPeOwnValueFromService = this.sharedService.storePeOwnValue;

    this.resultPiOwnValue = window.history.state.resultPiOwn;
    // or
    this.resultPiOwnValueFromService = this.sharedService.storePiOwnValue;

    this.resultPpOwnValue = window.history.state.resultPpOwn;
    // or
    this.resultPpOwnValueFromService = this.sharedService.storePpOwnValue;

    this.resultPtOwnValue = window.history.state.resultPtOwn;
    // or
    this.resultPtOwnValueFromService = this.sharedService.storePtOwnValue;

    this.resultPypOwnValue = window.history.state.resultPypOwn;
    // or
    this.resultPypOwnValueFromService = this.sharedService.storePypOwnValue;

    this.resultRiskOwnValue = window.history.state.resultRiskOwn;
    // or
    this.resultRiskOwnValueFromService = this.sharedService.storeRiskOwnValue;

    this.resultSkinOwnValue = window.history.state.resultSkinOwn;
    // or
    this.resultSkinOwnValueFromService = this.sharedService.storeSkinOwnValue;

    this.resultVcOwnValue = window.history.state.resultVcOwn;
    // or
    this.resultVcOwnValueFromService = this.sharedService.storeVcOwnValue;

    this.resultVsOwnValue = window.history.state.resultVsOwn;
    // or
    this.resultVsOwnValueFromService = this.sharedService.storeVsOwnValue;

    this.resultVeOwnValue = window.history.state.resultVeOwn;
    // or
    this.resultVeOwnValueFromService = this.sharedService.storeVeOwnValue;
  }

}
