module Api::V1

    class IdeasController < ApplicationController

        def index
            @ideas = Idea.order("created_at DESC")
            render json: @ideas
        end

        # API endpoint for creating new ideas 
        def create
            @idea = Idea.create(idea_params)
            render json: @idea
        end
          
        private
          
            def idea_params
              params.require(:idea).permit(:title, :body)
            end
    end

end
