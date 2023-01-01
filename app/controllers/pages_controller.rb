class PagesController < ApplicationController
  def home
  end

  def download
    send_file(
      "#{Rails.root}/app/assets/files/CV_FUNG_Yong_How.pdf",
      filename: "CV_FUNG_Yong_How.pdf",
      type: "application/pdf"
    )
  end
end
