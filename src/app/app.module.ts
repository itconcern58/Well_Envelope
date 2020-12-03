import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { MatInputModule } from '@angular/material';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AgGridModule } from 'ag-grid-angular';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule} from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { DragDropModule } from '@angular/cdk/drag-drop';


import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EquipmentEnvelopeComponent } from './components/pages/equipment-envelope/equipment-envelope.component';
import { ProductionEnvelopeComponent } from './components/pages/production-envelope/production-envelope.component';
import { CompletionEnvelopeComponent } from './components/pages/completion-envelope/completion-envelope.component';
import { MasterEnvelopeComponent } from './components/pages/master-envelope/master-envelope.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalModule} from './components/pages/production-envelope/modal.module';
import { MyModalComponent } from './components/pages/my-modal/my-modal.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { ModalPEComponent } from './components/pages/modal-pe/modal-pe.component';
import { ModalPPComponent } from './components/pages/modal-pp/modal-pp.component';
import { ModalPTComponent } from './components/pages/modal-pt/modal-pt.component';
import { ModalVEComponent } from './components/pages/modal-ve/modal-ve.component';
import { ModalPbComponent } from './components/pages/modal-pb/modal-pb.component';
import { ModalHPComponent } from './components/pages/modal-hp/modal-hp.component';
import { ModalAAPComponent } from './components/pages/modal-a-ap/modal-a-ap.component';
import { ModalBAPComponent } from './components/pages/modal-b-ap/modal-b-ap.component';
import { ModalVCComponent } from './components/pages/modal-vc/modal-vc.component';
import { ModalVSComponent } from './components/pages/modal-vs/modal-vs.component';
import { HornerPlotComponent } from './components/pages/horner-plot/horner-plot.component';
import { ModalPrComponent } from './components/pages/modal-pr/modal-pr.component';
import { ModalKhComponent } from './components/pages/modal-kh/modal-kh.component';
import { ModalDdihrComponent } from './components/pages/modal-ddihr/modal-ddihr.component';
import { ModalSkComponent } from './components/pages/modal-sk/modal-sk.component';
import { ModalDdComponent } from './components/pages/modal-dd/modal-dd.component';
import { ModalPiComponent } from './components/pages/modal-pi/modal-pi.component';
import { SharedServiceService } from './shared-service.services';
import { ModalDdlComponent } from './components/pages/modal-ddl/modal-ddl.component';
import { ModalDdnextComponent } from './components/pages/modal-ddnext/modal-ddnext.component';
import { ModalDd1hrLimComponent } from './components/pages/modal-dd1hr-lim/modal-dd1hr-lim.component';
import { ModalDd1hrNextComponent } from './components/pages/modal-dd1hr-next/modal-dd1hr-next.component';
import { ModalPiNextComponent } from './components/pages/modal-pi-next/modal-pi-next.component';
import { ModalPiLimComponent } from './components/pages/modal-pi-lim/modal-pi-lim.component';
import { ModalVcLimComponent } from './components/pages/modal-vc-lim/modal-vc-lim.component';
import { ModalVsLimComponent } from './components/pages/modal-vs-lim/modal-vs-lim.component';
import { ModalMbhpLimComponent } from './components/pages/modal-mbhp-lim/modal-mbhp-lim.component';
import { ModalMbhpCurrComponent } from './components/pages/modal-mbhp-curr/modal-mbhp-curr.component';
import { ModalFwhtLimComponent } from './components/pages/modal-fwht-lim/modal-fwht-lim.component';
import { ModalFwhtCurrComponent } from './components/pages/modal-fwht-curr/modal-fwht-curr.component';
import { ModalAccousSandComponent } from './components/pages/modal-accous-sand/modal-accous-sand.component';
import { ModalAccousCurrComponent } from './components/pages/modal-accous-curr/modal-accous-curr.component';
import { ModalSkLimComponent } from './components/pages/modal-sk-lim/modal-sk-lim.component';
import { ModalKhLimComponent } from './components/pages/modal-kh-lim/modal-kh-lim.component';
import { ModalDepLimComponent } from './components/pages/modal-dep-lim/modal-dep-lim.component';
import { ModalDepCurrComponent } from './components/pages/modal-dep-curr/modal-dep-curr.component';
import { ModalRiskLimComponent } from './components/pages/modal-risk-lim/modal-risk-lim.component';
import { ModalRiskCurrComponent } from './components/pages/modal-risk-curr/modal-risk-curr.component';
import { ModalPypCommComponent } from './components/pages/modal-pyp-comm/modal-pyp-comm.component';
import { ModalPpCommComponent } from './components/pages/modal-pp-comm/modal-pp-comm.component';
import { ModalPtCommComponent } from './components/pages/modal-pt-comm/modal-pt-comm.component';
import { ModalPeCommComponent } from './components/pages/modal-pe-comm/modal-pe-comm.component';
import { ModalAApCommComponent } from './components/pages/modal-a-ap-comm/modal-a-ap-comm.component';
import { ModalAcouCommComponent } from './components/pages/modal-acou-comm/modal-acou-comm.component';
import { ModalBApCommComponent } from './components/pages/modal-b-ap-comm/modal-b-ap-comm.component';
import { ModalDdCommComponent } from './components/pages/modal-dd-comm/modal-dd-comm.component';
import { ModalDd1hrCommComponent } from './components/pages/modal-dd1hr-comm/modal-dd1hr-comm.component';
import { ModalDepCommComponent } from './components/pages/modal-dep-comm/modal-dep-comm.component';
import { ModalFwhtCommComponent } from './components/pages/modal-fwht-comm/modal-fwht-comm.component';
import { ModalKhCommComponent } from './components/pages/modal-kh-comm/modal-kh-comm.component';
import { ModalMbhpCommComponent } from './components/pages/modal-mbhp-comm/modal-mbhp-comm.component';
import { ModalPiCommComponent } from './components/pages/modal-pi-comm/modal-pi-comm.component';
import { ModalRiskCommComponent } from './components/pages/modal-risk-comm/modal-risk-comm.component';
import { ModalSkinCommComponent } from './components/pages/modal-skin-comm/modal-skin-comm.component';
import { ModalVcCommComponent } from './components/pages/modal-vc-comm/modal-vc-comm.component';
import { ModalVsCommComponent } from './components/pages/modal-vs-comm/modal-vs-comm.component';
import { ModalVeCommComponent } from './components/pages/modal-ve-comm/modal-ve-comm.component';
import { ModalAApOwnComponent } from './components/pages/modal-a-ap-own/modal-a-ap-own.component';
import { ModalAcouOwnComponent } from './components/pages/modal-acou-own/modal-acou-own.component';
import { ModalBApOwnComponent } from './components/pages/modal-b-ap-own/modal-b-ap-own.component';
import { ModalDdOwnComponent } from './components/pages/modal-dd-own/modal-dd-own.component';
import { ModalDd1hrOwnComponent } from './components/pages/modal-dd1hr-own/modal-dd1hr-own.component';
import { ModalDepOwnComponent } from './components/pages/modal-dep-own/modal-dep-own.component';
import { ModalFwhtOwnComponent } from './components/pages/modal-fwht-own/modal-fwht-own.component';
import { ModalKhOwnComponent } from './components/pages/modal-kh-own/modal-kh-own.component';
import { ModalMbhpOwnComponent } from './components/pages/modal-mbhp-own/modal-mbhp-own.component';
import { ModalPeOwnComponent } from './components/pages/modal-pe-own/modal-pe-own.component';
import { ModalPiOwnComponent } from './components/pages/modal-pi-own/modal-pi-own.component';
import { ModalPpOwnComponent } from './components/pages/modal-pp-own/modal-pp-own.component';
import { ModalPtOwnComponent } from './components/pages/modal-pt-own/modal-pt-own.component';
import { ModalPypOwnComponent } from './components/pages/modal-pyp-own/modal-pyp-own.component';
import { ModalRiskOwnComponent } from './components/pages/modal-risk-own/modal-risk-own.component';
import { ModalSkinOwnComponent } from './components/pages/modal-skin-own/modal-skin-own.component';
import { ModalVcOwnComponent } from './components/pages/modal-vc-own/modal-vc-own.component';
import { ModalVsOwnComponent } from './components/pages/modal-vs-own/modal-vs-own.component';
import { ModalVeOwnComponent } from './components/pages/modal-ve-own/modal-ve-own.component';
import { ModalFlowCurrComponent } from './components/pages/modal-flow-curr/modal-flow-curr.component';
import { ModalFlowNextComponent } from './components/pages/modal-flow-next/modal-flow-next.component';
import { ModalPypFlagComponent } from './components/pages/modal-pyp-flag/modal-pyp-flag.component';
import { ModalBapFlagComponent } from './components/pages/modal-b-ap-flag/modal-b-ap-flag.component';
import { ModalAApFlagComponent } from './components/pages/modal-a-ap-flag/modal-a-ap-flag.component';
import { ModalDdFlagComponent } from './components/pages/modal-dd-flag/modal-dd-flag.component';
import { ModalDd1hrFlagComponent } from './components/pages/modal-dd1hr-flag/modal-dd1hr-flag.component';
import { ModalDepFlagComponent } from './components/pages/modal-dep-flag/modal-dep-flag.component';
import { ModalFwhtFlagComponent } from './components/pages/modal-fwht-flag/modal-fwht-flag.component';
import { ModalMbhpFlagComponent } from './components/pages/modal-mbhp-flag/modal-mbhp-flag.component';
import { ModalPeFlagComponent } from './components/pages/modal-pe-flag/modal-pe-flag.component';
import { ModalPpFlagComponent } from './components/pages/modal-pp-flag/modal-pp-flag.component';
import { ModalPtFlagComponent } from './components/pages/modal-pt-flag/modal-pt-flag.component';
import { ModalVeFlagComponent } from './components/pages/modal-ve-flag/modal-ve-flag.component';
import { ModalVcFlagComponent } from './components/pages/modal-vc-flag/modal-vc-flag.component';
import { ModalVsFlagComponent } from './components/pages/modal-vs-flag/modal-vs-flag.component';
import { ModalDDthrCalcComponent } from './components/pages/modal-ddthr-calc/modal-ddthr-calc.component';
import { ModalPICalcComponent } from './components/pages/modal-pi-calc/modal-pi-calc.component';
import { ModalKHCalcComponent } from './components/pages/modal-kh-calc/modal-kh-calc.component';
import { ModalSKCalcComponent } from './components/pages/modal-sk-calc/modal-sk-calc.component';

@NgModule({
  
  declarations: [
    AppComponent,
    EquipmentEnvelopeComponent,
    ProductionEnvelopeComponent,
    CompletionEnvelopeComponent,
    HornerPlotComponent,
    MasterEnvelopeComponent,
    MyModalComponent,
    ModalPEComponent,
    ModalPPComponent,
    ModalPTComponent,
    ModalVEComponent,
    ModalPbComponent,
    ModalHPComponent,
    ModalAAPComponent,
    ModalBAPComponent,
    ModalVCComponent,
    ModalVSComponent,
    HornerPlotComponent,
    ModalPrComponent,
    ModalKhComponent,
    ModalDdihrComponent,
    ModalSkComponent,
    ModalDdComponent,
    ModalPiComponent,
    ModalDdlComponent,
    ModalDdnextComponent,
    ModalDd1hrLimComponent,
    ModalDd1hrNextComponent,
    ModalPiNextComponent,
    ModalPiLimComponent,
    ModalVcLimComponent,
    ModalVsLimComponent,
    ModalMbhpLimComponent,
    ModalMbhpCurrComponent,
    ModalFwhtLimComponent,
    ModalFwhtCurrComponent,
    ModalAccousSandComponent,
    ModalAccousCurrComponent,
    ModalSkLimComponent,
    ModalKhLimComponent,
    ModalDepLimComponent,
    ModalDepCurrComponent,
    ModalRiskLimComponent,
    ModalRiskCurrComponent,
    ModalPypCommComponent,
    ModalPpCommComponent,
    ModalPtCommComponent,
    ModalPeCommComponent,
    ModalAApCommComponent,
    ModalAcouCommComponent,
    ModalBApCommComponent,
    ModalDdCommComponent,
    ModalDd1hrCommComponent,
    ModalDepCommComponent,
    ModalFwhtCommComponent,
    ModalKhCommComponent,
    ModalMbhpCommComponent,
    ModalPiCommComponent,
    ModalRiskCommComponent,
    ModalSkinCommComponent,
    ModalVcCommComponent,
    ModalVsCommComponent,
    ModalVeCommComponent,
    ModalAApOwnComponent,
    ModalAcouOwnComponent,
    ModalBApOwnComponent,
    ModalDdOwnComponent,
    ModalDd1hrOwnComponent,
    ModalDepOwnComponent,
    ModalFwhtOwnComponent,
    ModalKhOwnComponent,
    ModalMbhpOwnComponent,
    ModalPeOwnComponent,
    ModalPiOwnComponent,
    ModalPpOwnComponent,
    ModalPtOwnComponent,
    ModalPypOwnComponent,
    ModalRiskOwnComponent,
    ModalSkinOwnComponent,
    ModalVcOwnComponent,
    ModalVsOwnComponent,
    ModalVeOwnComponent,
    ModalFlowCurrComponent,
    ModalFlowNextComponent,
    ModalPypFlagComponent,
    ModalBapFlagComponent,
    ModalAApFlagComponent,
    ModalDdFlagComponent,
    ModalDd1hrFlagComponent,
    ModalDepFlagComponent,
    ModalFwhtFlagComponent,
    ModalMbhpFlagComponent,
    ModalPeFlagComponent,
    ModalPpFlagComponent,
    ModalPtFlagComponent,
    ModalVeFlagComponent,
    ModalVcFlagComponent,
    ModalVsFlagComponent,
    ModalDDthrCalcComponent,
    ModalPICalcComponent,
    ModalKHCalcComponent,
    ModalSKCalcComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatGridListModule,
    MatCardModule,
    MatDividerModule,
    MatSelectModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatDialogModule,
    ModalModule,
    MatTreeModule,
    MatButtonModule,
    MatIconModule,
    DragDropModule,
    AgGridModule.withComponents([])
  ],

  providers: [HttpClient, HttpClientModule, EquipmentEnvelopeComponent, MatDialog,
  SharedServiceService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  entryComponents: [MyModalComponent, ModalPEComponent, ModalPPComponent, ModalPTComponent, ModalVEComponent, ModalPbComponent,
  ModalHPComponent, ModalAAPComponent, ModalBAPComponent, ModalVCComponent, ModalVSComponent, ModalPrComponent, ModalKhComponent,
  ModalDdihrComponent, ModalSkComponent, ModalDdComponent, ModalPiComponent, ModalDdlComponent, ModalDdnextComponent, ModalDd1hrLimComponent,
  ModalDd1hrNextComponent, ModalPiNextComponent, ModalVcLimComponent, ModalVsLimComponent, ModalMbhpLimComponent, ModalMbhpCurrComponent,
  ModalFwhtLimComponent, ModalFwhtCurrComponent, ModalAccousSandComponent,  ModalAccousCurrComponent, ModalSkLimComponent,
  ModalKhLimComponent, ModalDepLimComponent, ModalDepCurrComponent, ModalRiskLimComponent, ModalRiskCurrComponent, ModalPypCommComponent,
  ModalPpCommComponent, ModalPtCommComponent, ModalPeCommComponent, ModalAApCommComponent, ModalBApCommComponent, ModalAcouCommComponent,
  ModalDdCommComponent, ModalDd1hrCommComponent, ModalDepCommComponent, ModalFwhtCommComponent, ModalKhCommComponent, ModalMbhpCommComponent,
  ModalPiCommComponent, ModalRiskCommComponent, ModalSkinCommComponent, ModalVcCommComponent, ModalVsCommComponent, ModalVeCommComponent,
  ModalAApOwnComponent, ModalAcouOwnComponent, ModalBApOwnComponent, ModalDdOwnComponent, ModalDd1hrOwnComponent, ModalDepOwnComponent, 
  ModalFwhtOwnComponent, ModalKhOwnComponent, ModalMbhpOwnComponent, ModalPeOwnComponent, ModalPiOwnComponent, ModalPpOwnComponent, ModalPtOwnComponent,
  ModalPypOwnComponent, ModalRiskOwnComponent, ModalSkinOwnComponent, ModalVcOwnComponent, ModalVsOwnComponent, ModalVeOwnComponent, ModalFlowCurrComponent,
  ModalFlowNextComponent, ModalPypFlagComponent, ModalBapFlagComponent, ModalAApFlagComponent, ModalDdFlagComponent, ModalDd1hrFlagComponent,
  ModalDepFlagComponent, ModalFwhtFlagComponent, ModalMbhpFlagComponent, ModalPeFlagComponent,ModalPpFlagComponent, ModalPtFlagComponent,
  ModalVeFlagComponent, ModalVcFlagComponent, ModalVsFlagComponent, ModalDDthrCalcComponent, ModalPICalcComponent,
ModalKHCalcComponent, ModalSKCalcComponent]
})

export class AppModule { }