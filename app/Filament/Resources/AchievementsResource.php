<?php

namespace App\Filament\Resources;

use App\Filament\Resources\AchievementsResource\Pages;
use App\Models\Achievement;
use Filament\Actions\Action;
use Filament\Forms;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class AchievementsResource extends Resource
{
    protected static ?string $model = Achievement::class;
    protected static ?string $navigationGroup = 'My Data';
    protected static ?int $navigationSort = 2;

    // protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';


    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('title')->required(),
                Textarea::make('description')->required(),
                FileUpload::make('attachment1')->required()
                    ->image()
                    ->imagePreviewHeight("150") // Menampilkan preview gambar
                    ->visibility('public')
                    ->disk("public")
                    ->acceptedFileTypes(["image/*"])
                    ->directory("achievement"),
                FileUpload::make('attachment2')->nullable()
                    ->image()
                    ->imagePreviewHeight("150") // Menampilkan preview gambar
                    ->visibility('public')
                    ->disk("public")
                    ->acceptedFileTypes(["image/*"])
                    ->directory("achievement"),
            ]);
    }
    protected function getCreateAction(): Action
    {
        return parent::getCreateAction()->label('New label');
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('No')->getStateUsing(
                    static function ($rowLoop, $livewire): string {
                        return (string) (
                            $rowLoop->iteration +
                            ($livewire->tableRecordsPerPage * (
                                $livewire->getPage() - 1
                            ))
                        );
                    }
                ),
                 ImageColumn::make("attachment1")->searchable()->width(80)->height(50)->alignCenter()
,                TextColumn::make('title')
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListAchievements::route('/'),
            'create' => Pages\CreateAchievements::route('/create'),
            'edit' => Pages\EditAchievements::route('/{record}/edit'),
        ];
    }
}
