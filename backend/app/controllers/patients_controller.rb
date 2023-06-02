class PatientsController < ApplicationController
  def create
    @patient = Patient.new(patient_params)

    if @patient.save
      render json: { message: 'Patient was successfully created.' }, status: :created
    else
      render json: { errors: @patient.errors.full_messages }, status: :unprocessable_entity
    end
  end
  def index
    @patients = Patient.all
    render json: @patients
  end

  private

  def patient_params
    params.require(:patient).permit(:name)
  end
end
