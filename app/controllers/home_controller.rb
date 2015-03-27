class HomeController < ApplicationController
  def index

  end

  def game
    @version = params[:version] ? "-#{params[:version]}" : ''

    render :file => "public/game#{@version}"
  end

  def push_data

  end
end
