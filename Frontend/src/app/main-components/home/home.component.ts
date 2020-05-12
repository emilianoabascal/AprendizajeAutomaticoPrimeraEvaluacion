import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ScoreService } from "../../services/score.service";
import { Score } from "../../model/Score";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  scoreForm: FormGroup;
  result: string;
  // Handle Loading
  isLoadingFinalScore: boolean;
  isLoadingTrainModel: boolean;
  // Handle Error
  scoreError: boolean;
  trainModelError: boolean;
  errorMessage: string;

  constructor(
    private scoreService: ScoreService,
    private formBuilder: FormBuilder
  ) {
    this.isLoadingFinalScore = false;
    this.isLoadingTrainModel = false;

    this.scoreError = false;
    this.trainModelError = false;
  }

  ngOnInit() {
    this.scoreForm = this.formBuilder.group({
      id: [""],
      grade1: [""],
      grade2: [""],
    });
  }

  get f() {
    return this.scoreForm.controls;
  }

  submitScore(): void {
    this.isLoadingFinalScore = true;

    const score: Score = {
      TeacherID: this.f.id.value,
      grade1: this.f.grade1.value,
      grade2: this.f.grade2.value,
    };

    this.scoreService.score(score).subscribe(
      (predictResponse) => {
        this.isLoadingFinalScore = false;
        this.result = predictResponse.prediction;
        console.log(this.result);
        return this.result;
      },
      (err) => {
        this.isLoadingFinalScore = false;
        this.scoreError = true;
        this.errorMessage = err.statusText;

        setTimeout(() => {
          this.scoreError = false;
          if(!this.trainModelError)this.errorMessage = null;
        }, 3000);
        console.log("HTTP Error", err);
      }
    );
  }

  trainModel(): void {
    this.isLoadingTrainModel = true;

    this.scoreService.train().subscribe(
      (trainResponse) => {
        this.isLoadingTrainModel = false;
        console.log(trainResponse);
        alert("training succesful");
      },
      (err) => {
        this.isLoadingTrainModel = false;
        this.trainModelError = true;
        this.errorMessage = err.statusText;

        setTimeout(() => {
          this.trainModelError = false;
          if(!this.scoreError)this.errorMessage = null;
        }, 3000);
        console.log("HTTP Error", err);
      }
    );
  }
}
